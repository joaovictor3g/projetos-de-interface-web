import { ThemeProvider } from "styled-components";
import { NavHeader } from "./components/NavHeader";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <NavHeader />
        <main>
          <AppRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
