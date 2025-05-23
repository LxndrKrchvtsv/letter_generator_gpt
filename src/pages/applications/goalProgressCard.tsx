import { Card, Group, Progress, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

import { useGeneratedApplications } from '../../hooks/useGeneratedApplications'
import { CREATE_NEW } from '../../constants'
import ActionButton from '../../components/ui/actionButton'

const GoalProgressCard = () => {
  const { maxApplications, currentNumber } = useGeneratedApplications()

  if (!maxApplications) {
    return null
  }

  return (
    <Card py="54" radius="md" bg="#EDFCF2" w="100%" h={376} m="auto">
      <Stack gap={32} align="center" maw={480} m="auto" px={'md'}>
        <Stack gap={16} align="center">
          <Title ta="center">Hit your goal</Title>
          <Text c="dimmed" ta="center">
            Generate and send out couple more job applications today to get hired faster
          </Text>
          <Link to="/new-application">
            <ActionButton iconType="create" text={CREATE_NEW} width={190} size="xl" />
          </Link>
        </Stack>
        <Stack gap={8} align="center">
          <Group justify="center" gap={8}>
            {Array.from({ length: maxApplications }, (_, i) => (
              <Progress
                key={i}
                value={100}
                w={32}
                h={8}
                size={10}
                style={{ transition: 'opacity 0.3s' }}
                color={i < currentNumber ? 'dark.9' : '#d3d3d3'}
              />
            ))}
          </Group>
          <Text c="dimmed" ta="center">
            {currentNumber} out of 5
          </Text>
        </Stack>
      </Stack>
    </Card>
  )
}

export default GoalProgressCard
