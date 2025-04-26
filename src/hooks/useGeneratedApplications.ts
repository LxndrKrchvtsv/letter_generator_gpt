import { useEffect, useState } from 'react'

import { sessionStorageService } from '../services/sessionStorage'

export const useGeneratedApplications = () => {
  const [maxApplications, setMaxApplications] = useState<number>(0)
  const [currentNumber, setCurrentNumber] = useState<number>(0)

  useEffect(() => {
    const max = sessionStorageService.getMaxApplications()
    const current = sessionStorageService.getCurrentNumberApplications()

    if (max) {
      setMaxApplications(max)
      setCurrentNumber(current)
    }
  }, [])

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent
      const currentNumberApplications = customEvent.detail.numberOfApplications as number

      setCurrentNumber(currentNumberApplications)
    }

    window.addEventListener('session-current-updated', handler)

    return () => {
      window.removeEventListener('session-current-updated', handler)
    }
  }, [])

  return { maxApplications, currentNumber }
}
