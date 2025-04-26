import './fonts.css'
import '@mantine/core/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/spotlight/styles.css'

import '@mantine/notifications/styles.css'
import { Notifications } from '@mantine/notifications'
import { Route, Routes } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { lazy, useEffect } from 'react'

import { theme } from './theme-config.ts'
import Layout from './layout.tsx'
import { sessionStorageService } from './services/sessionStorage.ts'

const NewApplicationLazy = lazy(() => import('./pages/newApplication'))
const ApplicationsLazy = lazy(() => import('./pages/applications'))

const App = () => {
  useEffect(() => {
    sessionStorageService.setMaxApplications()
  }, [])

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Routes>
        <Route
          path="/new-application"
          element={
            <Layout>
              <NewApplicationLazy />
            </Layout>
          }
        />
        <Route
          path="/applications"
          element={
            <Layout>
              <ApplicationsLazy />
            </Layout>
          }
        />
      </Routes>
    </MantineProvider>
  )
}

export default App
