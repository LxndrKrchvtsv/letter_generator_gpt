import { FormApplicationInfo } from '../types'

export const generateApplicationPrompt = ({
  jobTitle,
  company,
  skills,
  additionalInfo,
}: FormApplicationInfo) => {
  return `Job title: ${jobTitle}\\nCompany: ${company}\\nSkills: ${skills}\\nAdditional details: ${additionalInfo}.`
}
