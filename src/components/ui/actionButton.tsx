import { Button } from '@mantine/core'
import { IconCopy, IconPlus, IconTrash } from '@tabler/icons-react'
import { useClipboard } from '@mantine/hooks'

import { COPIED, COPY_TO_CLIPBOARD } from '../../constants'

type component = 'a'
type iconType = 'delete' | 'create' | 'copy'
type buttonSize = 'sm' | 'md' | 'lg' | 'xl'

interface IconButtonProps {
  iconType: iconType
  text?: string
  onClick?: () => void
  component?: component
  href?: string
  disabled?: boolean
  size?: buttonSize
  width?: number
  textAfterAction?: string
}

const ActionButton = ({
  text,
  iconType,
  onClick,
  component,
  href,
  disabled = false,
  size = 'md',
  width,
}: IconButtonProps) => {
  const clipboard = useClipboard()

  const handleClick = () => {
    if (iconType === 'copy' && text) {
      clipboard.copy(text)
    } else if (onClick) {
      onClick()
    }
  }

  let icon
  if (iconType === 'delete') {
    icon = <IconTrash size={20} stroke={1.5} />
  } else if (iconType === 'create') {
    icon = <IconPlus size={20} stroke={1} />
  } else if (iconType === 'copy') {
    icon = <IconCopy size={20} stroke={1.5} />
  }

  return (
    <Button
      variant={iconType === 'copy' || iconType === 'delete' ? 'transparent' : 'filled'}
      size={size}
      w={width}
      leftSection={iconType !== 'copy' && icon}
      rightSection={iconType === 'copy' && icon}
      onClick={handleClick}
      component={component}
      href={component && href}
      disabled={disabled}
      style={{ alignItems: iconType === 'copy' ? 'flex-end' : 'center' }}
    >
      {iconType === 'copy' ? (clipboard.copied ? COPIED : COPY_TO_CLIPBOARD) : text}
    </Button>
  )
}

export default ActionButton
