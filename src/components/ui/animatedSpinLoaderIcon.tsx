import { IconLoader } from '@tabler/icons-react'
import { MantineLoaderComponent } from '@mantine/core'
import { forwardRef } from 'react'

import styles from './ui.module.css'

const AnimatedSpinLoaderIcon: MantineLoaderComponent = forwardRef(() => {
  return <IconLoader stroke={1.5} className={styles.loaderAnimation} />
})

AnimatedSpinLoaderIcon.displayName = 'AnimatedSpinLoaderIcon'

export default AnimatedSpinLoaderIcon
