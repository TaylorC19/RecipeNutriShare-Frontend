import React from "react";
import IngredientRow from "./IngredientRow";
import "./Ingredients.css";

interface PropsInterface {
  ingredientsArr: { name: string, quantity: string, unit: string }[];
  setIngredientsArr: (value:{ name: string, quantity: string, unit: string }[]) => void;
}

function Ingredients(props: PropsInterface) {
  const { ingredientsArr, setIngredientsArr } = props;

  const newIngredientHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIngredientsArr([
      ...ingredientsArr,
      { name: "", quantity: "", unit: "" },
    ]);
  };

  return (
    <div className="ingredient-container">
      <p className="unit-explain-p">
        For units, you can enter in "natural speech." For example, you can use
        small, medium, large, or by weight for meat, fruits, and vegetables; or
        something casual like "slices" or "pieces" for bacon or toast.
      </p>
      <div className="column-titles">
        <span>Ingredient</span>
        <span>quantity</span>
        <span>units</span>
        <span>delete</span>
      </div>
      {ingredientsArr.map((row, index) => {
        return (
          <IngredientRow
            key={index}
            ingredientsArr={ingredientsArr}
            setIngredientsArr={setIngredientsArr}
            index={index}
          />
        );
      })}
      <button className="btn" onClick={newIngredientHandler}>add one more ingredient</button>
    </div>
  );
}

export default Ingredients;
