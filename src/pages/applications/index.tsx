import { Divider, Flex, Group, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

import GoalProgressCard from './goalProgressCard'
import ApplicationsList from './applicationsList'
import ActionButton from '../../components/ui/actionButton'
import { CREATE_NEW } from '../../constants'
import { useGeneratedApplications } from '../../hooks/useGeneratedApplications'

const Applications = () => {
  const { maxApplications, currentNumber } = useGeneratedApplications()
  return (
    <Flex direction="column" gap={48} w="100%">
      <Flex direction="column" gap={24}>
        <Group justify="space-between">
          <Title order={1}>Applications</Title>
          <Link to="/new-application">
            <ActionButton iconType="create" text={CREATE_NEW} />
          </Link>
        </Group>
        <Divider />
        <ApplicationsList />
      </Flex>
      {currentNumber < maxApplications && <GoalProgressCard />}
    </Flex>
  )
}

export default Applications
