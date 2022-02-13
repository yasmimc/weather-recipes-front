import { ThemeProvider } from "styled-components";
import { GlobalProvider } from "./contexts/GlobalContext";
import SinglePage from "./singlePage";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalProvider>
        <GlobalStyles />
        <SinglePage />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
