import React from "react";
import "./header.css";
import headerDemo from "../../assets/header-demo.mp4";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Landing page header
const Header = () => {
  function buttonClick() {
    window.umami.trackEvent("Header Button");
  }

  return (
    <div className="header">
      <div className="header__content-container">
        <div className="left__content">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1}
          >
            <h1 className="header__content-title">
              <font className="color__change">Stand Out </font>
              In Every Job Application.
            </h1>
          </AnimationOnScroll>
          <div className="cta__benefit-container">
            <AnimationOnScroll
              animateOnce={true}
              duration={1}
              animateIn="fadeInLeft"
              delay={100}
              className="cta__benefits"
            >
              <span className="material-icons header__check">check_circle</span>
              <p className="cta__text">
                Discover the recruiter & hiring manager for
                <font className="weight__change"> any </font>
                job
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              duration={1}
              animateIn="fadeInLeft"
              delay={200}
              className="cta__benefits"
            >
              <span className="material-icons header__check">check_circle</span>
              <p className="cta__text">
                Maximize reply rates on LinkedIn with text analysis
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              duration={1}
              animateIn="fadeInLeft"
              delay={300}
              className="cta__benefits"
            >
              <span className="material-icons header__check">check_circle</span>
              <p className="cta__text">
                Receive contact suggestions until you make a connection
              </p>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateOnce={true}
            offset={1000}
            duration={1}
            animateIn="fadeInDown"
            className="button__container"
          >
            <Link to="/login">
              <button className="button" onClick={buttonClick}>
                Get started for free
              </button>
            </Link>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateOnce={true}
          offset={1000}
          animateIn="fadeInRight"
          duration={1}
          className="right__content"
        >
          <video
            width="100%"
            height="100%"
            playsInline
            loop
            muted
            autoPlay
            className="rocketstart__demo"
          >
            <source src={headerDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Header;
