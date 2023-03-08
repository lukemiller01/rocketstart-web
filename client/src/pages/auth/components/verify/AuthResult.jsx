import React from "react";
import { Link } from "react-router-dom";
import { Navbar3 } from "../../../../components";
import { Helmet } from "react-helmet";
import "./authResult.css";

const AuthResult = ({ action, result, message }) => {
  window.umami.trackView("/auth/action");

  return (
    <div>
      <Helmet>
        <title>Authentication · Rocketstart</title>
      </Helmet>
      <Navbar3 />
      <div className="login">
        <h1 className="auth__header">
          {action} {result}
        </h1>
        <div className="auth__result">
          <p className="auth__result-paragraph">{message}</p>
          <Link className="home__button" to={"/login"}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthResult;
