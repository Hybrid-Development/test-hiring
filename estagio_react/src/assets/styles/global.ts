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

  body, button, input, a {
    font-family: 'Montserrat', sans-serif;
    font-family: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  button, a {
    cursor: pointer;
    outline: 0;
  }

  a {
    text-decoration: none;
  }
`;
