import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Transactions } from "./pages/Transaction";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaults";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  );
}

export default App;
