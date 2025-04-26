import { showNotification } from '@mantine/notifications'

import { handleError } from '../utils/handleError.ts'

const SESSION_STORAGE_KEYS = {
  GENERATED_APPLICATIONS: 'appGeneratorApplicationsGenerated',
  MAX_APPLICATIONS: 'appGeneratorMaxApplications',
}

export const sessionStorageService = {
  getMaxApplications: function () {
    try {
      const value = sessionStorage.getItem(SESSION_STORAGE_KEYS.MAX_APPLICATIONS)
      return value ? Number(value) : null
    } catch (error) {
      handleError(error)
    }
  },

  setMaxApplications: function () {
    try {
      const maxApplications = this.getMaxApplications()

      if (!maxApplications) {
        sessionStorage.setItem(SESSION_STORAGE_KEYS.MAX_APPLICATIONS, '5')
      }
    } catch (error) {
      handleError(error)
    }
  },

  getGeneratedApplications: function () {
    try {
      const raw = sessionStorage.getItem(SESSION_STORAGE_KEYS.GENERATED_APPLICATIONS)
      return raw ? JSON.parse(raw) : []
    } catch (error) {
      handleError(error)
    }
  },

  reachedTheLimitApplications: function () {
    const maxApplications = this.getMaxApplications()
    const currentNumberApplications = this.getCurrentNumberApplications()

    if (maxApplications) {
      return currentNumberApplications >= maxApplications
    }

    return false
  },

  getCurrentNumberApplications: function () {
    try {
      return this.getGeneratedApplications().length
    } catch (error) {
      handleError(error)
    }
  },

  setGeneratedApplications: function (applications: string[]) {
    try {
      sessionStorage.setItem(
        SESSION_STORAGE_KEYS.GENERATED_APPLICATIONS,
        JSON.stringify(applications)
      )
    } catch (error) {
      handleError(error)
    }
  },

  addGeneratedApplication: function (application: string) {
    const maxApplications = this.getMaxApplications() || 0
    const generatedApplications = this.getGeneratedApplications()

    if (generatedApplications.length >= maxApplications) {
      showNotification({
        title: 'Unable to add new application',
        message:
          'You reached out number of applications. Subscribe to enable add more applications.',
        color: 'orange',
        position: 'top-right',
        radius: 'lg',
        autoClose: 10000,
      })
    } else {
      try {
        generatedApplications.push(application)
        this.setGeneratedApplications(generatedApplications)

        window.dispatchEvent(
          new CustomEvent('session-current-updated', {
            detail: { numberOfApplications: generatedApplications.length },
          })
        )

        showNotification({
          title: 'Success!',
          message: 'Application was saved successfully.',
          color: 'green',
          position: 'bottom-right',
          radius: 'lg',
          autoClose: 4000,
        })
      } catch (error) {
        handleError(error)
      }
    }
  },

  removeGeneratedApplication: function (applicationToDelete: string) {
    try {
      const applications = this.getGeneratedApplications()
      const updated = applications.filter(
        (application: string) => application !== applicationToDelete
      )
      this.setGeneratedApplications(updated)

      window.dispatchEvent(
        new CustomEvent('session-current-updated', {
          detail: { updatedApplications: updated, numberOfApplications: updated.length },
        })
      )

      showNotification({
        title: 'Removed',
        message: 'Application was removed successfully.',
        color: 'green',
        position: 'bottom-right',
        radius: 'lg',
        autoClose: 4000,
      })
    } catch (error) {
      handleError(error)
    }
  },
}
