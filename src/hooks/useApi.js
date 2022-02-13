import CityApi from "../services/CityApi";
import RecipeApi from "../services/RecipeApi";

export default function useApi() {
  return {
    city: new CityApi(),
    recipe: new RecipeApi(),
  };
}
