import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
  }

  body, button, input {
    font-family: 'Montserrat', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;
