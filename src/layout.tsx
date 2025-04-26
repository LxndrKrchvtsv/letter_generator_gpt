import { Center, Container, Flex } from '@mantine/core'
import { ReactNode } from 'react'

import Header from './components/header'

interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container size="lg" py={32}>
      <Flex direction="column" gap={32}>
        <Header />
        <Center>{children}</Center>
      </Flex>
    </Container>
  )
}

export default Layout
