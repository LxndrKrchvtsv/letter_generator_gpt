import { showNotification } from '@mantine/notifications'
import { AxiosError } from 'axios'

export const handleError = (error: unknown) => {
  let message = 'Unknown error'

  if (error instanceof AxiosError) {
    const errorMessage = error?.response?.data.error.message
    console.error(
      'AxiosError:',
      `${error.name}, ${error?.response?.data.error.message}, ${error.stack}`
    )
    message = `Error Status: ${error.status}, Message: ${errorMessage.slice(0, errorMessage.indexOf('.') + 1)}`
  } else if (error instanceof Error) {
    console.error('General Error:', `${error.name}, ${error.message}, ${error.stack}`)
    message = error.message
  } else {
    console.error('Non-standard error:', error)
  }

  showNotification({
    title: 'Error generating application letter',
    message,
    color: 'red',
    position: 'top-right',
    radius: 'lg',
    autoClose: 10000,
  })
}
