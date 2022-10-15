import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/shared/Header";
import { Home } from "@/pages/Home";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
}
