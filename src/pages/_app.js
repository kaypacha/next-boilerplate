import React from 'react'
import App from 'next/app'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

class KayPachaApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
export default KayPachaApp
