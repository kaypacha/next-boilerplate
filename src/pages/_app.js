import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'utils'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
