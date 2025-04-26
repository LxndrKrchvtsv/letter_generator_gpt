import { Button, Grid } from '@mantine/core'
import { ChangeEvent, useCallback } from 'react'
import { useForm } from '@mantine/form'
import { IconRepeat } from '@tabler/icons-react'

import FormField from '../../components/ui/formField.tsx'
import {
  ADDITIONAL_DETAILS,
  ADDITIONAL_DETAILS_PLACEHOLDER,
  BUTTON_TEXT_GENERATE_NOW,
  BUTTON_TEXT_TRY_AGAIN,
  COMPANY,
  COMPANY_PLACEHOLDER,
  JOB_TITLE,
  JOB_TITLE_PLACEHOLDER,
  SKILLS_DESCRIPTION,
  SKILLS_DESCRIPTION_PLACEHOLDER,
} from '../../constants.ts'
import { ApplicationTitleType, FormApplicationInfo } from '../../types.ts'
import { areAllFieldsEmpty } from '../../utils/areAllFieldsEmpty.ts'
import { sessionStorageService } from '../../services/sessionStorage.ts'
import { useGeneratedApplications } from '../../hooks/useGeneratedApplications.ts'

interface ApplicationFormProps {
  applicationHeaderUpdater: (field: ApplicationTitleType, value: string) => void
  submit: (formApplicationInfo: FormApplicationInfo) => void
  isLoading: boolean
}

const ApplicationForm = ({ applicationHeaderUpdater, submit, isLoading }: ApplicationFormProps) => {
  const { currentNumber } = useGeneratedApplications()
  const form = useForm<FormApplicationInfo>({
    mode: 'controlled',
    initialValues: {
      jobTitle: '',
      company: '',
      skills: '',
      additionalInfo: '',
    },
  })

  const handleChange =
    (field: ApplicationTitleType) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.currentTarget.value

      form.setFieldValue(field, value)
      applicationHeaderUpdater(field, value)
    }

  const getButtonDisabledState = useCallback(() => {
    return (
      isLoading ||
      areAllFieldsEmpty(form.getValues()) ||
      sessionStorageService.reachedTheLimitApplications()
    )
  }, [form, isLoading])

  const getIconColor = () => {
    return getButtonDisabledState() ? '#ADB5BD' : '#344054'
  }

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <FormField
            onChange={handleChange('jobTitle')}
            label={JOB_TITLE}
            placeholder={JOB_TITLE_PLACEHOLDER}
            key={form.key('jobTitle')}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 6 }}>
          <FormField
            onChange={handleChange('company')}
            label={COMPANY}
            placeholder={COMPANY_PLACEHOLDER}
            key={form.key('company')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <FormField
            label={SKILLS_DESCRIPTION}
            placeholder={SKILLS_DESCRIPTION_PLACEHOLDER}
            key={form.key('skills')}
            {...form.getInputProps('skills')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <FormField
            label={ADDITIONAL_DETAILS}
            placeholder={ADDITIONAL_DETAILS_PLACEHOLDER}
            isTextarea
            maxLength={1200}
            rows={8}
            key={form.key('additionalInfo')}
            value={form.key('additionalInfo')}
            {...form.getInputProps('additionalInfo')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Button
            disabled={getButtonDisabledState()}
            fullWidth
            variant={currentNumber > 0 ? 'outline' : 'filled'}
            size="xl"
            radius="md"
            type="submit"
            loading={isLoading}
            loaderProps={{ type: 'spinLoader' }}
            leftSection={
              currentNumber > 0 ? <IconRepeat stroke={2} color={getIconColor()} /> : null
            }
          >
            {currentNumber > 0 ? BUTTON_TEXT_TRY_AGAIN : BUTTON_TEXT_GENERATE_NOW}
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  )
}

export default ApplicationForm
