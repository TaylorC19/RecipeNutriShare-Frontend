import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";
import "./SignUp.css"

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, createUser } = UserAuth();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      if (!user) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="signup-contents">
        <form className="signup-form" onSubmit={handleSignUp} action="">
          <h1 className="signup-header flex-item-margins">Welcome New User!</h1>
          <label className="flex-item-margins" htmlFor="signup-email">
            Email
          </label>
          <input
            type="email"
            id="signup-email"
            className="flex-item-margins"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="someone@somewhere.com"
          />
          <label className="flex-item-margins" htmlFor="signup-password">
            Password
          </label>
          <input
            type="password"
            id="signup-password"
            className="flex-item-margins"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />

          <br />
          
          <button className="signup-btn" type="submit">
            Sign up!
          </button>
        </form>

        <p className="small-margin">
          Already have an account? Sign in <Link to="/signin">here</Link>.
        </p>

        <p className="small-margin">
          Forgot you password? <Link to="/forgot-password">Click Here.</Link>
        </p>
      </div>

      <Footer></Footer>
    </>
  );
}

export default SignUp;
