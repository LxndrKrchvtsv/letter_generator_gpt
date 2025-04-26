import { Divider, Grid, Stack } from '@mantine/core'
import { useCallback, useState } from 'react'

import ApplicationForm from './applicationForm.tsx'
import ApplicationTitle from './applicationTitle.tsx'
import GeneratedApplication from './generatedApplication.tsx'
import { useDebouncedState } from '../../hooks/useDebounceState.ts'
import { ApplicationTitleType, FormApplicationInfo } from '../../types.ts'
import { generateApplicationLetter } from '../../utils/generateApplicationLetter.ts'
import { sessionStorageService } from '../../services/sessionStorage.ts'

const NewApplication = () => {
  const [jobTitle, setJobTitle] = useDebouncedState<string>('', 500)
  const [company, setCompany] = useDebouncedState<string>('', 500)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedApplication, setGeneratedApplication] = useState<string>('')

  const applicationHeaderUpdater = useCallback(
    (field: ApplicationTitleType, value: string) => {
      const map = {
        jobTitle: setJobTitle,
        company: setCompany,
      }

      map[field](value)
    },
    [setCompany, setJobTitle]
  )

  const submit = (formApplicationInfo: FormApplicationInfo) => {
    setIsLoading(true)

    generateApplicationLetter(formApplicationInfo)
      .then(application => {
        setGeneratedApplication(application)
        sessionStorageService.addGeneratedApplication(application)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack gap={12}>
          <ApplicationTitle jobTitle={jobTitle} company={company} />
          <Divider />
          <ApplicationForm
            applicationHeaderUpdater={applicationHeaderUpdater}
            submit={submit}
            isLoading={isLoading}
          />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <GeneratedApplication isLoading={isLoading} generatedText={generatedApplication} />
      </Grid.Col>
    </Grid>
  )
}

export default NewApplication
