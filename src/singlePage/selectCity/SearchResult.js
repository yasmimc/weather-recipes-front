import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import { CityOption, ResultsContainer } from "./Styles";

export default function SearchResults({ results, setLoadingRecipe }) {
  const { recipe } = useApi();
  const { setSelectedCity, setRecipe, setWeather, setCityResults } =
    useContext(GlobalContext);

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
      .finally(() => {
        setLoadingRecipe(false);
        setCityResults(null);
      });
  }

  return (
    <ResultsContainer display={!!results}>
      {!!results && !results.length ? (
        <p>Sorry, we didn't find any city with this name</p>
      ) : (
        results?.map((city) => (
          <CityOption key={city.id} onClick={() => selectCity(city)}>
            {city.name} - {city.sys.country}
          </CityOption>
        ))
      )}
    </ResultsContainer>
  );
}
