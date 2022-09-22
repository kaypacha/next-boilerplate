import React from 'react'
import { render, screen } from '@testing-library/react'
import { HomeScreen } from '../src/views'

describe('Text', () => {
  it('renders a text inside Home', () => {
    render(<HomeScreen />)

    const content = screen.getByText(/Boilerplate by KayPacha/i)

    expect(content).toBeInTheDocument()
  })
})
