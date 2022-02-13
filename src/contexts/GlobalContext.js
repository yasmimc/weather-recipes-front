import { createContext, useState } from "react";

const GlobalContext = createContext();

export default GlobalContext;

export function GlobalProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState(false);
  const [weather, setWeather] = useState(null);
  const [recipe, setRecipe] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        weather,
        setWeather,
        recipe,
        setRecipe,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
