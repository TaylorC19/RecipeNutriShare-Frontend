import React from "react";
import "./RecipeCard.css";
import { singleRecipeObj } from "../global.t";

interface PropsInterface {
  recipeInfo: singleRecipeObj,
  setSingleRecipe: (value:singleRecipeObj) => void,
  setIsDefaultView: (value: boolean) => void,
  index?: number,
}

function RecipeCard(props: PropsInterface) {
  const { recipeInfo, setSingleRecipe, setIsDefaultView } = props;
  return (
    <div className="recipe-card">
      <h2>{recipeInfo.title}</h2>
      <div className="info-rows">
        <p className="grid-item">Servings: {recipeInfo.servings}</p>
        <p className="grid-item">
          Cook Time: {recipeInfo.hours ? recipeInfo.hours : 0} hr(s) and{" "}
          {recipeInfo.minutes ? recipeInfo.minutes : 0} min(s)
        </p>
        <p className="grid-item">Total calories: {recipeInfo.total_calories}</p>
      </div>
      <h4>Nutrition information (per serving)</h4>
      <div className="nutrition-rows">
        <p className="grid-item">Calories: {recipeInfo.calories_per_serving}</p>
        <p className="grid-item">
          Protein: {recipeInfo.total_protein / recipeInfo.servings}
        </p>
        <p className="grid-item">
          Carbohydrates: {recipeInfo.total_carbohydrates / recipeInfo.servings}
        </p>
      </div>
      <p>Description: {recipeInfo.description}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          setSingleRecipe(recipeInfo);
          setIsDefaultView(false);
        }}
      >
        More info
      </button>
    </div>
  );
}

export default RecipeCard;
