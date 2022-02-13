import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import { CityOption, ResultsContainer } from "./Styles";

export default function SearchResults({ results, setLoadingRecipe }) {
  const { recipe } = useApi();
  const { setSelectedCity, setRecipe, setWeather } = useContext(GlobalContext);

  function selectCity(city) {
    setLoadingRecipe(true);
    recipe
      .getRecipeByWeather(city.coord)
      .then((resp) => {
        setRecipe(resp.data.recipe);
        setWeather(resp.data.weather);
        setSelectedCity(city.name);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRecipe(false));
  }

  return (
    <ResultsContainer display={results?.length}>
      {results?.map((city) => (
        <CityOption key={city.id} onClick={() => selectCity(city)}>
          {city.name} - {city.sys.country}
        </CityOption>
      ))}
    </ResultsContainer>
  );
}
