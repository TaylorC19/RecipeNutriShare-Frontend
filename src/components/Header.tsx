import React, {MouseEvent} from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { UserAuth } from "./context/AuthContext";



const Header: React.FC = () => {
  const { user, logOut, userDeletion } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  /* eslint no-restricted-globals: "off" */
  const handleDeletion = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (confirm("Are you sure you want to delete your account?")) {
      if (
        confirm(
          "Warning: this cannot be undone. Are you sure you want to delete your account?"
        )
      ) {
        await userDeletion();
        navigate("/");
      }
    }
  };

  return (
    <nav className="header-div">
      <h1 className="logo">RecipeNutriShare</h1>

      {user ? (
        <div className="navigate-items">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/public-recipes")}>
            Browse public recipes
          </button>
          <button onClick={() => navigate("/new-recipe")}>New Recipe</button>
          <button onClick={() => navigate("/my-recipes")}>My Recipes</button>
          <button onClick={handleLogOut}>Log Out</button>
          <button onClick={handleDeletion}>DELETE ACCOUNT</button>
        </div>
      ) : (
        <div className="navigate-items">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/public-recipes")}>
            Browse public recipes
          </button>
          <button onClick={() => navigate("/signin")}>Sign In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
