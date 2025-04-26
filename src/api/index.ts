import axios from 'axios'

import { OpenAIRequestBody } from '../types'

const URL = 'https://api.openai.com/v1/chat/completions'
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

export const fetchApplication = async (body: OpenAIRequestBody) => {
  const response = await axios.post(URL, body, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })

  return response.data
}
