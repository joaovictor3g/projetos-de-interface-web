import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        App
      </div>
    </ThemeProvider>
  );
}
