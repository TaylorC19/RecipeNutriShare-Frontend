import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleRecipe from "../components/SingleRecipe";
import { UserAuth } from "../components/context/AuthContext";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { singleRecipeObj } from "../global.t";

function Home ()  {
  const { user, logOut } = UserAuth();
  //const navigate = useNavigate();
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
  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  useEffect(()=> {
    const getHighlight = async ()=> {
      const highlight = await axios
        .get<singleRecipeObj>(
          process.env.REACT_APP_BACKEND_URL + "/api/random-recipe"
        )
        .then((result) => result.data);
      setSingleRecipe(highlight);
    };
    getHighlight();
  }, []);

  const handleLogOut = async () => {
    try {
      await logOut();
      // navigate('/signin')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="contents">
        <h1>Welcome!</h1>
        <p>Current User: {(user?.email) || "None"}</p>
        {!user ? (
          <p>Please sign in or sign up!</p>
        ) : (
          <button onClick={handleLogOut}>Logout</button>
        )}

        <div className="about-div">
          <h2>What do we do?</h2>
          <div className="about-row">
            <div className="about-text">
              <p>
                Whether you're cooking for a family of four or are just trying to
                take better of yourself, it is important to know what you are
                putting into your body.
              </p>

              <p>
                With this app, you can focus on the cooking, and we will provide
                you the nutrition information you need to take care of yourself
                and everyone you are cooking for.
              </p>
            </div>
            <img
              src="https://static-prod.adweek.com/wp-content/uploads/2020/06/cooking-at-home-CONTENT-2020.jpg"
              alt="a family cooking"
            />
          </div>
        </div>

        <div className="Information">
          <h2>Why use this app?</h2>
          <div className="information-grid">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Usability.png"
                alt="Usablitiy"
              />
            </div>
            <div>
              <h3>Easy to use</h3>
              <ul>
                <li>Perfect for browsing recipes or creating your own.</li>
                <li>Create your own recipebook of delicious meals.</li>
                <li>
                  Get the information you need to focus on the important part,
                  the food!
                </li>
              </ul>
            </div>
            <div>
              <h3>Reliable</h3>
              <ul>
                <li>
                  Powered by nutritionix to provide nutritionist verified
                  information.
                </li>
                <li>
                  With this information, you can take your health into your own
                  hands.
                </li>
              </ul>
            </div>
            <div>
              <a href="https://www.nutritionix.com/">
                <img
                  src="data:image/png;base64,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"
                  alt="Powered by Nutritionix API"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="highlight-div">
          <h2>Highlighted Recipe</h2>
          {!moreInfo ? (
            <div>
              <h3>Title: {singleRecipe?.title}</h3>
              <p>{singleRecipe?.description}</p>
              <button
                onClick= {(e) => {
                  e.preventDefault();
                  setMoreInfo(true);
                }}
              >
                See more
              </button>
            </div>
          ) : (
            <SingleRecipe singleRecipe={singleRecipe}></SingleRecipe>
          )}
        </div>
      </div>

      <Footer text="© 2023 RecipeNutriShare" />
    </div>
  );
};

export default Home;
