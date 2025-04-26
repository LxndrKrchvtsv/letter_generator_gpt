import { Flex, Paper } from '@mantine/core'

import TextPreview from '../../components/ui/textPreview'
import { sessionStorageService } from '../../services/sessionStorage'
import ActionButton from '../../components/ui/actionButton'
import { DELETE } from '../../constants'

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
