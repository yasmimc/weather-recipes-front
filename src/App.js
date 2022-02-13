import { GlobalProvider } from "./contexts/GlobalContext";
import SinglePage from "./singlePage";

function App() {
  return (
    <GlobalProvider>
      <SinglePage />
    </GlobalProvider>
  );
}

export default App;
