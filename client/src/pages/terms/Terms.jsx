import React from "react";
import { useOutletContext } from "react-router-dom";
import { Navbar } from "../../components";
import { Footer, TermsConditions } from "../../containers";
import { Helmet } from "react-helmet";

const Terms = () => {
  // window.umami.trackView("/terms");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Terms · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <TermsConditions />
      <div className="grey__bg">
        <Footer />
      </div>
    </div>
  );
};

export default Terms;
