export const theme = {
  colors: {
    black: "#000000",

    white: "#ffffff",

    gray600: "#4A5568",
    gray700: "#2D3748",

    blue300: "#63B3ED",
  },
} as const;

export type Theme = typeof theme;
