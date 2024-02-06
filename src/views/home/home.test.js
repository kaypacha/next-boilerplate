import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import { HomeScreen } from 'views'

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  )

describe('Text', () => {
  it('renders a text inside Home', () => {
    const wrapper = setup()

    const content = screen.getByText(/Boilerplate by KayPacha/i)

    expect(content).toBeInTheDocument()

    expect(wrapper.container).toMatchSnapshot()
  })
})
