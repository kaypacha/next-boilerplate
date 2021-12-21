import { isString } from 'lodash'

const theme = {
  colors: {
    primary: '#29AC9C',
    secondary: '#CE546D',
    white: 'white',
    black: 'black',
  },
  spacing: (...args) => {
    return args.map(item => (isString(item) ? item : `${8 * item}px`)).join(' ')
  },
  textStyles: {
    h1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px',
    },
    title: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
  textStyle: style => `
    font-size: ${theme.textStyles[style].fontSize};
    font-weight: ${theme.textStyles[style].fontWeight};
    line-height: ${theme.textStyles[style].lineHeight};
    font-family: Open Sans,sans-serif;
  `,
}

export default theme
