import React from "react";
import './IngredientRow.css'

interface PropsInterface {
  ingredientsArr: { name: string; quantity: string; unit: string }[];
  setIngredientsArr: (
    value: { name: string; quantity: string; unit: string }[]
  ) => void;
  index: number;
}

function IngredientRow(props: PropsInterface) {
  const { ingredientsArr, setIngredientsArr, index } = props;


  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = [...ingredientsArr];
    inputData[index]["name"] = e.target.value;
    setIngredientsArr(inputData);
  };

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = [...ingredientsArr];
    inputData[index]["quantity"] = (e.target.value);
    setIngredientsArr(inputData);
  };

  const handleUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = [...ingredientsArr];
    inputData[index]["unit"] = e.target.value;
    setIngredientsArr(inputData);
  };
  
  const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const inputData = [...ingredientsArr];
    inputData.splice(index, 1);
    setIngredientsArr(inputData);
  };

  return (
    <div className="one-item">
      <input
        value={ingredientsArr[index]['name']}
        onChange={handleName}
        type="text"
        className="name"
        placeholder="ingredient"
      />
      <input
        value={ingredientsArr[index]['quantity']}
        onChange={handleQuantity}
        type="number"
        className="quantity"
        placeholder="quantity"
      />
      <input
        value={ingredientsArr[index]['unit']}
        onChange={handleUnit}
        type="text"
        className="unit"
        placeholder="units"
      />
      <button onClick={handleDeleteButton}>🗑️</button>
    </div>
  );
}

export default IngredientRow;
