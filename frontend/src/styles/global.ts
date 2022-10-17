import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  body, input, button, textarea {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
