import { Textarea, TextInput } from '@mantine/core'
import { ChangeEvent, ReactNode } from 'react'

import styles from './ui.module.css'

interface FormFieldProps {
  label: string
  placeholder: string
  isTextarea?: boolean
  maxLength?: number
  rows?: number
  value?: string
  error?: ReactNode
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const FormField = ({
  label,
  placeholder,
  isTextarea,
  maxLength,
  rows,
  value,
  error,
  onChange,
  ...restProps
}: FormFieldProps) => {
  return (
    <>
      {isTextarea ? (
        <Textarea
          description={`${value?.length} / ${maxLength}`}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          classNames={styles}
          size="md"
          radius="md"
          label={label}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          error={error}
          onChange={onChange}
          {...restProps}
        />
      ) : (
        <TextInput
          classNames={styles}
          size="md"
          radius="md"
          label={label}
          error={error}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
      )}
    </>
  )
}

export default FormField
