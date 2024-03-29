import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import CallToAction from "../../containers/calltoaction/CallToAction";
import { useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import ProductFeature from "../../components/productFeature/ProductFeature";
import "./product.css";

const Product = () => {
  // window.umami.trackView("/product");

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Product · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <div className="product">
        <div className="product__header">
          <h1>Product</h1>
          <p className="product__header-text">
            Explore Rocketstart's features to help you make your next big career
            move, expand your professional network, and more.
          </p>
          <div className="product__header-button_container">
            <HashLink smooth to="/product#contact-finder">
              <button className="button">Contact Finder</button>
            </HashLink>
            <HashLink smooth to="/product#message-analysis">
              <button className="button">Message Analysis</button>
            </HashLink>
          </div>
        </div>
        <div className="product__feature-container">
          <ProductFeature
            feature={"Contact Finder"}
            description={
              "Paste any job opening URL into Rocketstart and discover the recruiter hiring for the role. In one click, you have a person to get in touch with about your application."
            }
            image={"ContactFinder"}
            id={"contact-finder"}
            boxOne={"+95% of Jobs"}
            boxOneText={
              "Contact Finder provides results for over 95% of jobs posted online."
            }
            boxTwo={"Transparent Data"}
            boxTwoText={
              "Rocketstart's data is used ethically. Every contact we distribute has a public source."
            }
            boxThree={"+80% Accuracy"}
            boxThreeText={
              "Contact Finder provides accurate results and its algorithm is continously improving."
            }
            boxIconOne={"work"}
            boxIconTwo={"database"}
            boxIconThree={"add_task"}
          />

          <ProductFeature
            feature={"Message Analysis"}
            description={
              "Craft the perfect LinkedIn message using Message Analysis. Rocketstart scans your text for four attributes proven to increase message reply rates. When you're done, copy the text and send your message on LinkedIn."
            }
            image={"MessageAnalysis"}
            id={"message-analysis"}
            boxOne={"+25% More Responses"}
            boxOneText={
              "Rocketstart messages receive higher response rates than messages written unaided."
            }
            boxTwo={"Optimized For LinkedIn"}
            boxTwoText={
              "Rocketstart makes LinkedIn's 300 character limit feel enormous by suggesting efficient phrases."
            }
            boxThree={"Research-Backed"}
            boxThreeText={
              "Message Analysis consolidates techniques used by leading sales professionals and career coaches into one tool."
            }
            boxIconOne={"monitoring"}
            boxIconTwo={"analytics"}
            boxIconThree={"science"}
          />
        </div>
      </div>
      <CallToAction page={"CTA Button (/product)"} />
      <div className="grey__bg">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
