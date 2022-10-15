import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/shared/Header";
import { RouterProvider } from "./routes";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <RouterProvider />
      </main>
    </ThemeProvider>
  );
}
