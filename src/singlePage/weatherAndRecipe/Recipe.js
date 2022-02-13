import { HalfContainer } from "./Styles";

export default function Recipe({ recipe }) {
  return (
    <HalfContainer>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt="recipeImg" />
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h4>
        Preparation instructions on <a href={recipe.url}>{recipe.url}</a>
      </h4>
    </HalfContainer>
  );
}
