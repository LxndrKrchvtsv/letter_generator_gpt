import { FormApplicationInfo } from '../types.ts'

export const areAllFieldsEmpty = (values: FormApplicationInfo) => {
  return Object.values(values).some(value => value === '' || value === null || value === undefined)
}
