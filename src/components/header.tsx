import { ActionIcon, Flex, Image } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'

import { ApplicationProgress } from '../pages/applications/applicationProgress'

const Header = () => {
  return (
    <header>
      <Flex
        justify="space-between"
        direction={{ base: 'column', xs: 'row' }}
        gap={{ base: '24', xs: '0' }}
      >
        <Image src="/images/logo.svg" alt="logo" fit="initial" w="fit-content" />
        <Flex
          gap="lg"
          w={{ base: '100%', xs: 'fit-content' }}
          align={{ base: 'flex-start', xs: 'center' }}
          justify={{ base: 'space-between', xs: 'center' }}
        >
          <ApplicationProgress />
          <ActionIcon
            variant="default"
            size="lg"
            radius="md"
            aria-label="Home"
            component="a"
            href="/applications"
          >
            <IconHome stroke={1} />
          </ActionIcon>
        </Flex>
      </Flex>
    </header>
  )
}

export default Header
