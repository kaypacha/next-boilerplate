import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import { Text } from 'components'

export const Main = styled.main`
  align-items: center;
  background-color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  > :not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`

const DefaultLayout = props => {
  const { children } = props

  return (
    <Main id="main">
      <Text color="white" textStyle="h2">
        Boilerplate by KayPacha
      </Text>
      {children}
    </Main>
  )
}

export default DefaultLayout
