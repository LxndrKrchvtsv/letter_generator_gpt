export enum AgentRole {
  SYSTEM = 'system',
  USER = 'user',
}

export interface FormApplicationInfo {
  jobTitle: string
  company: string
  skills: string
  additionalInfo: string
}

interface Message {
  role: AgentRole
  content: string
}

export interface OpenAIRequestBody {
  model: string
  messages: Message[]
  temperature: number
}

export type ApplicationTitleType = 'jobTitle' | 'company'
