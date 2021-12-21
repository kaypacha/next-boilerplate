import React from 'react'
import Text from './index'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'black', 'white'],
      control: { type: 'select' },
    },
    textStyle: {
      options: ['h1', 'h2', 'title', 'body1'],
      control: { type: 'select' },
    },
    textAlign: {
      options: ['center', 'left', 'right', 'justify'],
      control: { type: 'select' },
    },
  },
}

const Template = args => <Text {...args}>Placeholder</Text>

export const Primary = Template.bind({})
Primary.args = {
  textStyle: 'h1',
  textAlign: 'center',
  color: 'primary',
}
