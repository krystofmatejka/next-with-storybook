import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    src: url('/fonts/Open_Sans/OpenSans-Regular.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }
`

const SpringApp = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default SpringApp
