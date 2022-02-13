import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import SpinnerLoader from "../../components/SpinnerLoader";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import Recipe from "./Recipe";
import { Container } from "./Styles";
import Weather from "./Weather";

export default function WeatherAndRecipe() {
  const { weather, recipe, selectedCity, setRecipe, setWeather } =
    useContext(GlobalContext);
  const recipeApi = useApi().recipe;
  const [loadingAnotherRecipe, setLoadingAnotherRecipe] = useState(false);

  function getAnotherRecipe() {
    if (loadingAnotherRecipe) return;
    setLoadingAnotherRecipe(true);
    recipeApi
      .getRecipeByWeather({ lat: weather.lat, lon: weather.lon })
      .then((resp) => {
        setRecipe(resp.data.recipe);
        setWeather(resp.data.weather);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingAnotherRecipe(false));
  }

  return (
    <Container>
      <Recipe
        recipe={recipe}
        getAnotherRecipe={getAnotherRecipe}
        loadingAnotherRecipe={loadingAnotherRecipe}
      />
      <Weather weather={weather} selectedCity={selectedCity} />
    </Container>
  );
}
