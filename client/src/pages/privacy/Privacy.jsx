import React from "react";
import { Navbar } from "../../components";
import { Footer, PrivacyPolicy } from "../../containers";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

const Privacy = () => {
  // window.umami.trackView("/privacy");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Privacy · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <PrivacyPolicy />
      <div className="grey__bg">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
