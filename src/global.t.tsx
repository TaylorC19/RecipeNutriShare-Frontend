export interface ingrObj {
  name: string,  
  quantity: number,
  unit: string,
  calories: number,
  protein: number,
  carbohydrates: number,
}

export interface singleRecipeObj {
  id: number,
  user_uid: string,
  title: string,
  servings: number,
  hours: number,
  minutes: number,
  description: string
  instructions: string,
  ingredients: ingrObj[],
  is_public: boolean,
  total_calories: number,
  total_protein: number,
  total_carbohydrates: number,
  calories_per_serving: number,
}

export interface recipeInfoType {
  title: string,
  servings: string,
  hours: string,
  minutes: string,
  description: string,
  instructions: string,
  is_public: boolean,
}