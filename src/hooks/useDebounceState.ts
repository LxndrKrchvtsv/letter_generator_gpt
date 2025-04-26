import { useEffect, useRef, useState } from 'react'

export function useDebouncedState<T>(initial: T, timeInMs: number = 250) {
  const [value, setValue] = useState(initial)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastValue = useRef<T>(initial)

  const setDebouncedValue = (newValue: T) => {
    if (lastValue.current === newValue) {
      return
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      if (lastValue.current !== newValue) {
        setValue(newValue)
      }
      lastValue.current = newValue
    }, timeInMs)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return [value, setDebouncedValue] as const
}
