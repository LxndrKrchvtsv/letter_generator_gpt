import { Box, Paper, ScrollArea, Text } from '@mantine/core'

import { AnimatedSVGLoadingIcon } from '../../components/ui/animatedSVGLoadingIcon'
import ActionButton from '../../components/ui/actionButton'
import { GENERATED_APPLICATION_PLACEHOLDER } from '../../constants'

interface ApplicationPreviewProps {
  generatedText?: string
  isLoading?: boolean
}

const GeneratedApplication = ({ generatedText, isLoading }: ApplicationPreviewProps) => {
  return (
    <Paper
      radius="md"
      p="24"
      style={{
        height: '100%',
        maxHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F2F4F7',
      }}
    >
      {isLoading ? (
        <Box m="auto">
          <AnimatedSVGLoadingIcon />
        </Box>
      ) : (
        <>
          <ScrollArea offsetScrollbars mb={24}>
            <Text c="dimmed" size="lg" style={{ whiteSpace: 'pre-line' }}>
              {generatedText || GENERATED_APPLICATION_PLACEHOLDER}
            </Text>
          </ScrollArea>
          <Box style={{ alignSelf: 'flex-end' }}>
            <ActionButton text={generatedText} iconType="copy" />
          </Box>
        </>
      )}
    </Paper>
  )
}

export default GeneratedApplication
