import { Flex, Group, Text } from '@mantine/core'
import { IconCircleCheckFilled, IconCircleFilled } from '@tabler/icons-react'

import { useGeneratedApplications } from '../../hooks/useGeneratedApplications'

export const ApplicationProgress = () => {
  const { maxApplications, currentNumber } = useGeneratedApplications()

  if (!maxApplications) {
    return null
  }

  return (
    <Flex
      justify="flex-start"
      gap="md"
      align={{ base: 'flex-start', xs: 'center' }}
      direction={{ base: 'column', xs: 'row' }}
    >
      <Text size="sm" c="dimmed">
        {currentNumber}/{maxApplications} applications generated
      </Text>
      <Group gap={4}>
        {currentNumber === maxApplications ? (
          <IconCircleCheckFilled stroke={1} color="green" />
        ) : (
          Array.from({ length: maxApplications }, (_, i) => (
            <IconCircleFilled
              key={i}
              size={10}
              style={{ transition: 'opacity 0.3s' }}
              color={i < currentNumber ? 'dark.9' : '#d3d3d3'}
            />
          ))
        )}
      </Group>
    </Flex>
  )
}
