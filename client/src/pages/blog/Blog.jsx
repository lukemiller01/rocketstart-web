import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import { useOutletContext } from "react-router-dom";
import "./blog.css";
import Article from "../../components/article/Article";
import { Helmet } from "react-helmet";
import { map, pen } from "./imports";
import { Link } from "react-router-dom";

const Blog = () => {
  window.umami.trackView("/blog");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Blog · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <div className="blog">
        <h1 className="blog__header">Blog</h1>
        <p className="blog__header">
          Discover Rocketstart's posts on making the most out of your job
          search.
        </p>
        <div className="blog__container">
          <Link to="/blog/how-I-landed-my-job-at-spacex">
            <Article
              image={map}
              date={"January 17 2023"}
              title={"How I Landed My Job at SpaceX with a LinkedIn Message"}
            />
          </Link>
          <Link to="/blog/why-I-built-rocketstart">
            <Article
              image={pen}
              date={"January 19 2022"}
              title={"Why I Built Rocketstart"}
            />
          </Link>
          {/* <Article image={mac} date={"December 23 2022"} title={"Land Your Dream Internship: GPA, Year, & Major Requirements Explained"}/> */}
          {/* <Article image={pen} date={"December 23 2022"} title={"Why Your LinkedIn Cold Outreach Template Isn't Working"}/> */}
        </div>
      </div>
      <div className="grey__bg">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
