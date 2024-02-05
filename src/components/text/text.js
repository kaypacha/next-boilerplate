import styled from 'styled-components'
import { theme } from 'theme'

const resolveColor = props => {
  const { color } = props

  return theme.colors[color || 'black']
}

const resolveTextStyle = props => {
  const { textStyle } = props

  return theme.textStyle(textStyle || 'body1')
}

const resolveTextAlign = props => {
  const { textAlign } = props

  if (!textAlign) {
    return ''
  }

  return `
    text-align: ${textAlign};
    width: 100%;
  `
}

export const Text = styled('span').withConfig({
  shouldForwardProp: prop => prop !== 'textStyle',
})`
  color: ${resolveColor};
  display: inline-block;
  text-decoration: none;

  ${resolveTextAlign}
  ${resolveTextStyle}
`
