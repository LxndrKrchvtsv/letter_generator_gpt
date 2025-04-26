import { Divider, Flex, Group, Title } from '@mantine/core'

import GoalProgressCard from './goalProgressCard'
import ApplicationsList from './applicationsList'
import ActionButton from '../../components/ui/actionButton'
import { CREATE_NEW } from '../../constants'

const Applications = () => {
  return (
    <Flex direction="column" gap={48} w="100%">
      <Flex direction="column" gap={24}>
        <Group justify="space-between">
          <Title order={1}>Applications</Title>
          <ActionButton iconType="create" component="a" text={CREATE_NEW} href="/new-application" />
        </Group>
        <Divider />
        <ApplicationsList />
      </Flex>
      <GoalProgressCard />
    </Flex>
  )
}

export default Applications
