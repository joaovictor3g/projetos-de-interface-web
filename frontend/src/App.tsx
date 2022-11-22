import { GlobalStyle, theme } from "@/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/shared/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { AuthContextProvider } from "./contexts/AuthContext";

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
