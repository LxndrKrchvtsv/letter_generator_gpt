import { FormApplicationInfo } from '../types'

export const areAllFieldsEmpty = (values: FormApplicationInfo) => {
  return Object.values(values).some(value => value === '' || value === null || value === undefined)
}
