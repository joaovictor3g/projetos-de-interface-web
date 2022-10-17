import { css } from "styled-components";

export const theme = {
  colors: {
    green: "#00875F",
    greenLight: "#00B37E",

    gray1: "#121214",
    gray2: "#202024",
    gray3: "#323238",
    gray4: "#7C7C8A",
    gray5: "#8D8D99",
    gray6: "#C4C4CC",
    gray7: "#E1E1E6",

    red: "#F75A68",

    white: "#FFFFFF",
  },

  customs: {
    wrapper: () => css`
      max-width: 1200px;
      width: 100%;
      padding: 1rem;
      margin: 0 auto;
    `,

    header: {
      height: `70px`,
    },
  },
} as const;
