import { FormApplicationInfo, OpenAIRequestBody } from '../types.ts'
import { generateApplicationPrompt } from './generateApplicationPrompt.ts'
import { generateOpenAIRequestBody } from './generateOpenAIRequestBody.ts'
import { fetchApplication } from '../api'
import { handleError } from './handleError.ts'

export const generateApplicationLetter = async (formApplicationInfo: FormApplicationInfo) => {
  const applicationPrompt: string = generateApplicationPrompt(formApplicationInfo)
  const openAIRequestBody: OpenAIRequestBody = generateOpenAIRequestBody({
    prompt: applicationPrompt,
  })

  try {
    const response = await fetchApplication(openAIRequestBody)
    return response?.choices[0]?.message?.content
  } catch (error: unknown) {
    handleError(error)
  }
}
