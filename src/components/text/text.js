import styled, { css } from 'styled-components'

const resolveColor = props => {
  const { color, theme } = props

  return theme.colors[color || 'black']
}

const resolveTextStyle = props => {
  const { textStyle, theme } = props

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
  ${() => css`
    color: ${resolveColor};
    display: inline-block;
    text-decoration: none;

    ${resolveTextAlign}
    ${resolveTextStyle}
  `}
`
