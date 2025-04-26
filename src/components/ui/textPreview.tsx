import { Text } from '@mantine/core'

interface TextPreviewProps {
  text: string
}

const TextPreview = ({ text }: TextPreviewProps) => {
  if (!text) {
    return null
  }

  return (
    <Text
      c="dimmed"
      size="lg"
      style={{
        display: '-webkit-box',
        whiteSpace: 'pre-line',
        WebkitLineClamp: 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'relative',
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
      }}
    >
      {text}
    </Text>
  )
}

export default TextPreview
