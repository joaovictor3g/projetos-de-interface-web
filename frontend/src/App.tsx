import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/shared/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
