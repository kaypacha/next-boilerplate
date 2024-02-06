import styled, { css } from 'styled-components'

import { Text } from 'components'

export const Main = styled('main')`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    > :not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
  `}
`

export const DefaultLayout = props => {
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
