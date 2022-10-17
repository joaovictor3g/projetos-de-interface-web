import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/shared/Header";
import { RouterProvider } from "./routes";
import { AuthContextProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>
          <RouterProvider />
        </main>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
