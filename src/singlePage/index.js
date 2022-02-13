import { useContext } from "react";
import Container from "../components/Container";
import GlobalContext from "../contexts/GlobalContext";
import WeatherAndRecipe from "./weatherAndRecipe/WeatherAndRecipe";
import SelectCity from "./selectCity/SelectCity";

export default function SinglePage() {
  const { selectedCity } = useContext(GlobalContext);
  return (
    <Container>
      <h1>Weather Recipes</h1>
      {!selectedCity ? <SelectCity /> : <WeatherAndRecipe />}
    </Container>
  );
}
