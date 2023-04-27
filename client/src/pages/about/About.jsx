import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";
import headshot from "../../assets/square.jpg";
import "./about.css";

const About = () => {
  // window.umami.trackView("/about");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Our Story · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />

      <div className="about">
        <h1 className="about__header">About Rocketstart</h1>

        <div className="about__letter">
          <p className="about__paragraph">
            Hello! My name is Luke. Like me, you've probably struggled finding a
            job or internship. You fill applications endlessly. You send dozens
            of connection requests on LinkedIn. You never hear back.
          </p>
          <p className="about__paragraph">
            Qualified candiates are getting ghosted. They need a way to cut
            through the noise. That's why I built Rocketstart. I compiled all
            the strategies I used to receive job offers from companies like
            Tesla and SpaceX into one platform. Rocketstart lets job seekers
            discover the recruiter for any application and craft the best
            possible message to them.
          </p>
          <p className="about__paragraph">
            My mission is to help you land your dream job. Check out Rocketstart
            to take the first step. I wish you the very best in your job hunt.
          </p>
          <p className="about__paragraph">
            With 💙, <br /> Luke
          </p>
        </div>

        <div className="about__profile">
          <img
            className="about__headshot"
            src={headshot}
            alt="Luke Miller"
          ></img>
          <h3 className="about__bold">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mail__to"
              href="mailto:luke@rocketstart.careers"
            >
              Luke Miller
            </a>
          </h3>
          <p className="about__paragraph">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default About;
