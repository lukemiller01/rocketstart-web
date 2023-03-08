import React from "react";
import { HashLink } from "react-router-hash-link";
import "./processFeature.css";

// This component is a part of the landing page in the 2nd section.
// Hashlink is used to direct the user to the correct section of the Product page on click.
const ProcessFeature = ({ header, description, feature, icon, link }) => {
  return (
    <div className="process__steps-container">
      <span className="material-symbols-outlined process__icon">{icon}</span>
      <h4 className="process__feature-header">{header}</h4>
      <p className="process__para">{description}</p>
      <HashLink to={link}>
        <div className="process__explore-container">
          <h5 className="process__explore-text">Explore {feature}</h5>
          <span className="material-symbols-outlined process__feature-icon">
            arrow_right_alt
          </span>
        </div>
      </HashLink>
    </div>
  );
};

export default ProcessFeature;
