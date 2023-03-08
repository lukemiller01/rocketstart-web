import React from "react";
import {
  Header,
  Questions,
  Footer,
  Process,
  CallToAction,
} from "../../containers";
import { useOutletContext } from "react-router-dom";
import { Navbar } from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  window.umami.trackView("/");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Find the recruiter for any job in one click · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <Header />
      {/* <div className="grey__bg">
          <Testimonials/>
      </div> */}
      <Process />
      <Questions />
      <CallToAction page={"CTA Button (/)"} />
      <div className="grey__bg">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
