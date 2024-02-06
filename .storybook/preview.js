import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../src/theme'
import { reset } from '../src/utils'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const GlobalStyles = createGlobalStyle`
  ${reset}
`

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      main: theme,
    },
    Provider: ThemeProvider,
  }),
]
