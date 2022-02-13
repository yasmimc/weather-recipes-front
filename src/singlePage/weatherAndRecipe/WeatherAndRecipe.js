import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import Recipe from "./Recipe";
import { Container } from "./Styles";
import Weather from "./Weather";

export default function WeatherAndRecipe() {
  const { weather, recipe } = useContext(GlobalContext);

  return (
    <Container>
      <Recipe recipe={recipe} />
      <Weather weather={weather} />
    </Container>
  );
}
