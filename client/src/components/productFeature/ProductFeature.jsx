import React from "react";
import FeatureCards from "../featureCards/FeatureCards";
import "./productFeature.css";

// This is the component shown 2x on the Product page. Includes Image & Description. Includes Three feature cards.
// Note dynamically added image using "require"
const ProductFeature = ({
  feature,
  description,
  image,
  id,
  boxOne,
  boxOneText,
  boxTwo,
  boxTwoText,
  boxThree,
  boxThreeText,
  boxIconOne,
  boxIconTwo,
  boxIconThree,
}) => {
  return (
    <div>
      <div className="product__feature" id={id}>
        <div className="product__feature-text_content">
          <h4 className="product__feature-header">{feature}</h4>
          <p aria-label="feature">{description}</p>
        </div>

        <div className="product__feature-image_content">
          <img
            className="product__feature-image"
            src={require(`../../assets/${image}.png`)}
            alt={feature}
          ></img>
        </div>
      </div>

      <div className="product__feature-cards">
        <FeatureCards icon={boxIconOne} header={boxOne} text={boxOneText} />
        <FeatureCards icon={boxIconTwo} header={boxTwo} text={boxTwoText} />
        <FeatureCards icon={boxIconThree} header={boxThree} text={boxThreeText} />
      </div>
    </div>
  );
};

export default ProductFeature;
