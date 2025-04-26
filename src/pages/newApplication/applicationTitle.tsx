import { Title } from '@mantine/core'

import { NEW_APPLICATION } from '../../constants.ts'

export interface ApplicationTitleProps {
  jobTitle?: string
  company?: string
}

const ApplicationTitle = ({ jobTitle, company }: ApplicationTitleProps) => {
  const initialTitle = (
    <Title order={2} c={'#667085'}>
      {NEW_APPLICATION}
    </Title>
  )
  const fulfilledTitle = <Title order={2}>{`${jobTitle}, ${company}`}</Title>

  if (jobTitle && company) {
    return fulfilledTitle
  }

  return initialTitle
}

export default ApplicationTitle
