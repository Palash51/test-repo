import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  body {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // height: 100vh;
    background: #0c0f12;
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;