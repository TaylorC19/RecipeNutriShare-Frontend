import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserAuth } from "../components/context/AuthContext";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import SingleRecipe from "../components/SingleRecipe";
import { singleRecipeObj } from "../global.t";

const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState<singleRecipeObj[]>([]);
  const [isDefaultView, setIsDefaultView] = useState<boolean>(true);
  const [singleRecipe, setSingleRecipe] = useState<singleRecipeObj>({
    id: 0,
    user_uid: "",
    title: "",
    servings: 0,
    hours: 0,
    minutes: 0,
    description: "",
    instructions: "",
    ingredients: [],
    is_public: false,
    total_calories: 0,
    total_protein: 0,
    total_carbohydrates: 0,
    calories_per_serving: 0,
  });

  const { user } = UserAuth();

  useEffect(() => {
    (async function () {
      const userRecipes = await axios
        .get(`/api/recipes/${user?.uid}`)
        .then((results) => results.data);
      setMyRecipes(userRecipes);
      return "allGood";
    })();
    // console.log('useEffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // getRecipes();
  }, [user]);

  return (
    <div>
      <Header />
      <div className="contents">
        <h1>Your Recipes</h1>

        <div className="recipe-contents-div">
          {isDefaultView ? (
            myRecipes.map((recipe, index) => {
              return (
                <RecipeCard
                  recipeInfo={recipe}
                  key={index}
                  index={index}
                  setSingleRecipe={setSingleRecipe}
                  setIsDefaultView={setIsDefaultView}
                />
              );
            })
          ) : (
            <SingleRecipe
              setIsDefaultView={setIsDefaultView}
              singleRecipe={singleRecipe}
            ></SingleRecipe>
          )}
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyRecipes;
