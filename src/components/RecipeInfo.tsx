import React from "react";
import "./RecipeInfo.css";
import { recipeInfoType } from "../global.t";

interface PropsInterface {
  recipeInfo: recipeInfoType,
  setRecipeInfo: (payload:recipeInfoType) => void,
}

function RecipeInfo(props:PropsInterface) {
  const { recipeInfo, setRecipeInfo } = props;

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = { ...recipeInfo };
    // const inputData = recipeInfo; // how are these different?
    inputData.title = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleServings = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = { ...recipeInfo };
    inputData.servings = (e.target.value);
    setRecipeInfo(inputData);
  };

  const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = { ...recipeInfo };
    inputData.hours = (e.target.value);
    setRecipeInfo(inputData);
  };

  const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = { ...recipeInfo };
    inputData.minutes = (e.target.value);
    setRecipeInfo(inputData);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputData = { ...recipeInfo };
    inputData.description = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleInstructions = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputData = { ...recipeInfo };
    inputData.instructions = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleIsPublic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = { ...recipeInfo };
    inputData.is_public = !inputData.is_public;
    setRecipeInfo(inputData);
  };

  return (
    <div className="info-container">
      <div>
        <label htmlFor="title">Title: </label>
        <input
          onChange={handleTitle}
          value={recipeInfo.title}
          type="text"
          id="title"
          placeholder="Title your recipe"
        />
      </div>

      <div>
        <label htmlFor="servings">Servings: </label>
        <input
          onChange={handleServings}
          value={recipeInfo.servings}
          type="number"
          id="servings"
          placeholder="how many servings?"
        />
      </div>

      <div>
        <label htmlFor="hours-minutes">Cooking times: </label>
        <p>
          <input
            onChange={handleHours}
            value={recipeInfo.hours}
            type="number"
            id="hours"
            placeholder="hours"
          />{" "}
          :{" "}
          <input
            onChange={handleMinutes}
            value={recipeInfo.minutes}
            type="number"
            id="minutes"
            placeholder="minutes"
          />
        </p>
      </div>

      <div>
        <label htmlFor="description">Description:</label> <br />
        <textarea
          onChange={handleDescription}
          placeholder="Add a desciption for your recipe"
          name="description"
          id="desciption"
          value={recipeInfo.description}
          rows={10}
        ></textarea>
      </div>

      <div>
        <label htmlFor="instructions">Instructions:</label> <br />
        <textarea
          onChange={handleInstructions}
          placeholder="Add the instructions for your recipe"
          name="instructions"
          id="instructions"
          value={recipeInfo.instructions}
          rows={10}
        ></textarea>
      </div>

      <div>
        <label htmlFor="is-public">Do you want your recipe to be public for others to see? </label>
        <input type="checkbox" onChange={handleIsPublic} />
        <p>By default, your recipe will be private. Check the above box for others to be able to see it.</p>
      </div>
    </div>
  );
}

export default RecipeInfo;
