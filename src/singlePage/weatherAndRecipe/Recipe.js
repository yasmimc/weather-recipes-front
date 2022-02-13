import { HalfContainer } from "./Styles";

export default function Recipe({ recipe }) {
  return (
    <HalfContainer>
      <h3>{recipe.label}</h3>
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
    </HalfContainer>
  );
}
