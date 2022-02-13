import { useContext } from "react";
import Container from "../components/Container";
import GlobalContext from "../contexts/GlobalContext";
import WeatherAndRecipe from "./weatherAndRecipe/WeatherAndRecipe";
import SelectCity from "./selectCity/SelectCity";
import Header from "../components/Header";

export default function SinglePage() {
  const { selectedCity } = useContext(GlobalContext);
  return (
    <Container>
      <Header />
      {!selectedCity ? <SelectCity /> : <WeatherAndRecipe />}
    </Container>
  );
}
