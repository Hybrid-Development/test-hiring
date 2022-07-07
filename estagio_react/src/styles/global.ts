import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  body {
    background-color: #18191a;
  }
  button, a {
    cursor: pointer;
  }
`

export default GlobalStyles