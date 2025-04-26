import { Flex, SimpleGrid } from '@mantine/core'
import { useEffect, useState } from 'react'

import ApplicationPreview from './applicationPreview.tsx'
import { sessionStorageService } from '../../services/sessionStorage.ts'

const ApplicationsList = () => {
  const [applications, setApplications] = useState<string[]>([])

  useEffect(() => {
    const generatedApplications = sessionStorageService.getGeneratedApplications()

    if (generatedApplications) {
      setApplications(generatedApplications)
    }
  }, [])

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent
      const updatedGeneratedApplications = customEvent.detail.updatedApplications

      setApplications(updatedGeneratedApplications)
    }

    window.addEventListener('session-current-updated', handler)

    return () => {
      window.removeEventListener('session-current-updated', handler)
    }
  }, [])

  if (!applications) {
    return null
  }

  return (
    <Flex direction="column" gap={32} w={'100%'}>
      <SimpleGrid cols={{ sm: 2, xs: 1 }} spacing={{ base: 'md' }} verticalSpacing={{ base: 'lg' }}>
        {applications.map((text, index) => (
          <ApplicationPreview key={index} text={text} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default ApplicationsList
