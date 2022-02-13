import { useContext, useState } from "react";
import Input from "../../components/Input";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import { CityOption, ResultsContainer } from "./Styles";

export function SearchCity() {
  const { city, recipe } = useApi();
  const [results, setResults] = useState(null);
  const { setSelectedCity, setRecipe, setWeather } = useContext(GlobalContext);
  const [loadingRecipe, setLoadingRecipe] = useState(false);

  function searchCity(e) {
    if (e.key === "Escape") {
      e.target.value = "";
      setResults(null);
      return;
    }
    const value = e.target.value;
    if (value.length > 2) {
      city
        .getCities(value)
        .then((resp) => setResults(resp.data))
        .catch((error) => console.error(error));
    }
  }

  function selectCity(coord) {
    setLoadingRecipe(true);
    recipe
      .getRecipeByWeather(coord)
      .then((resp) => {
        setRecipe(resp.data.recipe);
        setWeather(resp.data.weather);
        setSelectedCity(true);
        console.log(resp.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRecipe(false));
  }

  return !loadingRecipe ? (
    <>
      <Input label="Type your city here:" onKeyUp={searchCity} />
      <ResultsContainer display={results?.length}>
        {results?.map((city) => (
          <CityOption key={city.id} onClick={() => selectCity(city.coord)}>
            {city.name} - {city.sys.country}
          </CityOption>
        ))}
      </ResultsContainer>
    </>
  ) : (
    "Loading"
  );
}
