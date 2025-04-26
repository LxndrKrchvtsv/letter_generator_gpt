import { AgentRole, OpenAIRequestBody } from '../types'
import { OPEN_AI_MODEL, OPEN_AI_MODEL_TEMPERATURE, SYSTEM_ROLE_CONTENT } from '../constants'

interface GenerateOpenAIRequestParams {
  prompt: string
  model?: string
  temperature?: number
}

export const generateOpenAIRequestBody = ({
  prompt,
  model = OPEN_AI_MODEL,
  temperature = OPEN_AI_MODEL_TEMPERATURE,
}: GenerateOpenAIRequestParams): OpenAIRequestBody => {
  return {
    model: model,
    messages: [
      {
        role: AgentRole.SYSTEM,
        content: SYSTEM_ROLE_CONTENT,
      },
      {
        role: AgentRole.USER,
        content: prompt,
      },
    ],
    temperature: temperature,
  }
}
