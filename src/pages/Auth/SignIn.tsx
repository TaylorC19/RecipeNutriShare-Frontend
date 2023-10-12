//import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";
import "./SignIn.css"

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, loginUser } = UserAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
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
      <div className="signin-contents">
        <form className="signin-form" onSubmit={handleLogin} action="">
          <h1 className="signin-header flex-item-margins">Welcome Back!</h1>
          <label className="flex-item-margins" htmlFor="signin-email">
            Email
          </label>
          <input
            type="email"
            id="signin-email"
            value={email}
            className="flex-item-margins"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="someone@somewhere.com"
          />
          <label className="flex-item-margins" htmlFor="signin-password">
            Password
          </label>
          <input
            type="password"
            id="signin-password"
            className="flex-item-margins"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <br />
          <button className="signin-btn " type="submit">
            Sign in!
          </button>
        </form>
        <p className="small-margin">
          New? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="small-margin">
          Forgot you password? <Link to="/forgot-password">Click Here.</Link>
        </p>
      </div>
      <Footer></Footer> 
    </>
  );
}

export default SignIn;
