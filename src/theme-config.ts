import { Button, createTheme, Loader, Text } from '@mantine/core'

import AnimatedSpinLoaderIcon from './components/ui/animatedSpinLoaderIcon'

export const theme = createTheme({
  fontFamily: 'Fixel, sans-serif',
  defaultRadius: 'md',
  headings: {
    fontFamily: 'Fixel-Header, sans-serif',
    sizes: {
      h1: {
        fontSize: '48px',
        fontWeight: '600',
      },
      h2: {
        fontSize: '36px',
        fontWeight: '600',
      },
    },
  },
  components: {
    Button: Button.extend({
      vars: (_, props) => {
        const rootVars: Record<string, string> = {}

        if (props.size === 'xl') {
          rootVars['--button-height'] = '60px'
          rootVars['--button-fz'] = '18px'
        }

        if (props.variant === 'filled') {
          rootVars['--button-bg'] = '#087443'
          rootVars['--button-hover'] = '#064c2c'
        }

        if (props.variant === 'outline') {
          rootVars['--button-bg'] = '#FFFFFF'
          rootVars['--button-hover'] = '#d7d7d7'
          rootVars['--button-color'] = '#344054'
          rootVars['--button-hover-color'] = '#222a37'
          rootVars['--button-bd'] = '1px solid #D0D5DD'
        }

        if (props.variant === 'transparent') {
          rootVars['--button-color'] = '#475467'
          rootVars['--button-hover-color'] = '#232932'
        }

        return { root: rootVars }
      },
    }),
    Text: Text.extend({
      vars: (_, props) => {
        const rootVars: Record<string, string> = {}

        if (props.c === 'dimmed') {
          rootVars['--mantine-color-dimmed'] = '#667085'
          rootVars['--text-fz'] = '18px'
        }

        return { root: rootVars }
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, spinLoader: AnimatedSpinLoaderIcon },
        type: 'custom',
      },
    }),
  },
})
