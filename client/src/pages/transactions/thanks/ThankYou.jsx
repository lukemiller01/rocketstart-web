import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar3 } from "../../../components";

const ThankYou = () => {
  return (
    <div>
      <Helmet>
        <title>Authentication · Rocketstart</title>
      </Helmet>
      <Navbar3 />
      <div className="login">
        <h1 className="auth__header">Thank You 💙</h1>
        <div className="auth__result">
          <p className="auth__result-paragraph">
            Your transaction was successful! 🎉🎉🎉
          </p>
          <Link className="home__button" to={"/login"}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
