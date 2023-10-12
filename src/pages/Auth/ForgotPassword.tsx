import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const { resetPasswordEmail } = UserAuth();
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPasswordEmail(email);
      setErrorMessage("");
      setSuccessMessage("The reset email has been send.");
    } catch (error) {
      setErrorMessage("The email has not been recongized.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Header />

      <div className="forgotpassword-contents">
        <form className="forgotpassword-form" action="" onSubmit={handleSubmit}>
          <h1 className="forgotpassword-header flex-item-margins">
            Reset Password
          </h1>
          <p className="flex-item-margins">E-Mail Address:</p>
          <input
            type="text"
            value={email}
            className="flex-item-margins"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button className="forgotpassword-btn" type="submit">
            Send reset request
          </button>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </form>

        <p className="flex-item-margins">
          Ready to sign-in? <Link to="/signin">Click here</Link>
        </p>

        <p className="flex-item-margins">
          Don't have an account? <Link to="/signup">Click here</Link>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default ForgotPassword;
