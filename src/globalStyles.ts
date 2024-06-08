import { createGlobalStyle } from 'styled-components';

import tokens from './design/tokens';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  .page {
    background-color: ${tokens.colors.lightestText};
    border: 1px solid ${tokens.colors.offWhite};
    margin: 1rem auto;
    padding: 1rem;
    width: 80%;
    min-width: 480px;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${tokens.colors.darkBg};
    }

    .page {
      background-color: ${tokens.colors.bgDark3};
      border: 1px solid ${tokens.colors.bgDark2};
    }

    * {
      color: ${tokens.colors.white};
    }
  }
`;

export default GlobalStyle;
