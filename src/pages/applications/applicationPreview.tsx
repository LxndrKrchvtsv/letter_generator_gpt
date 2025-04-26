import { Flex, Paper } from '@mantine/core'

import TextPreview from '../../components/ui/textPreview.tsx'
import { sessionStorageService } from '../../services/sessionStorage.ts'
import ActionButton from '../../components/ui/actionButton.tsx'
import { DELETE } from '../../constants.ts'

interface ApplicationPreviewProps {
  text: string
}

const ApplicationPreview = ({ text }: ApplicationPreviewProps) => {
  if (!text) {
    return null
  }

  return (
    <Paper
      radius="md"
      p="24"
      h={240}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F2F4F7',
      }}
    >
      <TextPreview text={text} />
      <Flex justify="space-between">
        <ActionButton
          iconType="delete"
          text={DELETE}
          onClick={() => sessionStorageService.removeGeneratedApplication(text)}
        />
        <ActionButton text={text} iconType={'copy'} />
      </Flex>
    </Paper>
  )
}

export default ApplicationPreview
