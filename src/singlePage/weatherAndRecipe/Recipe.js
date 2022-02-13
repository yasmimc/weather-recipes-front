import { HalfContainer } from "./Styles";
import { GiPerspectiveDiceSixFacesRandom as Dices } from "react-icons/gi";
import SpinnerLoader from "../../components/SpinnerLoader";

export default function Recipe({
  recipe,
  getAnotherRecipe,
  loadingAnotherRecipe,
}) {
  return (
    <HalfContainer>
      {loadingAnotherRecipe ? (
        <SpinnerLoader />
      ) : (
        <>
          <h3>
            <span>
              {recipe.label} <Dices onClick={getAnotherRecipe} />
            </span>
          </h3>
          <img src={recipe.image} alt="recipeImg" />
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Preparation instructions</h4>
          <a href={recipe.url} target="_blank" rel="noreferrer">
            {recipe.url}
          </a>
        </>
      )}
    </HalfContainer>
  );
}
