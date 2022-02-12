import Container from "../../components/Container";
import { SearchCity } from "./SerchCity";

export default function Home() {
  return (
    <Container>
      <h1>Weather Recipes</h1>
      <h2>Get a recipe based on the weather!</h2>
      <SearchCity />
    </Container>
  );
}
