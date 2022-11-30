import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray700};
    font-family: Roboto;
    color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
  }

`;
