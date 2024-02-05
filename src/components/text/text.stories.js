import { Text } from 'components'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
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

export const Primary = {
  args: {
    textStyle: 'h1',
    textAlign: 'center',
    color: 'primary',
  },
}
