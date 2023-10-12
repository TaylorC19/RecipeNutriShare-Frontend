import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import SingleRecipe from "../components/SingleRecipe";
import './PublicRecipes.css';
import { singleRecipeObj } from "../global.t";

function PublicRecipes() {
  const [publicRecipes, setPublicRecipes] = useState<singleRecipeObj[]>([]);
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

  useEffect(() => {
    (async function () {
      const userRecipes = await axios
        .get(process.env.BACKEND_URL + `/api/public-recipes`)
        .then((results) => {
            if(Array.isArray(results)) {
                return results.data;
            } else {
                console.log("cannot hit backend");
                console.log(results);
                return [];
            }
        });
      setPublicRecipes(userRecipes);
      return "allGood";
    })();
  }, []);

  return (
    <div>
      <Header />
      <div className="contents">
        <h1>Public Recipes</h1>
        <div className="recipe-contents-div">
          {isDefaultView ? (
            publicRecipes.map((recipe, index) => {
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
}

export default PublicRecipes;
