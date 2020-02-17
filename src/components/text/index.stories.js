import React from 'react'
import { text } from '@storybook/addon-knobs'
import Text from './index'

const metadata = {
  title: 'Theme|Text'
}

export const Normal = () => {
  const value = text('value', 'Kay Pacha')

  const textStyle = text('textStyle', 'h1')

  const textAlign = text('textAlign', 'center')

  const color = text('color', 'black')

  return (
    <Text textStyle={textStyle} color={color} textAlign={textAlign}>
      {value}
    </Text>
  )
}

export default metadata
