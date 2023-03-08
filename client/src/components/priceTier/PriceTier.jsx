import React from "react";
import { useDispatch } from "react-redux";
import { createCheckout } from "../../actions/stripeActions";
import "./priceTier.css";

// Bookmarked component.
const PriceTierHeader = ({
    name,
    price,
    currency,
    description,
    search,
    extension,
    second,
    bulk,
    templates,
    reply,
    popular,
    planState,
    setSpinner,
  }) => {
  const dispatch = useDispatch();

  async function handleCheckout(e) {
    setSpinner(true);
    var priceID = "";
    if (planState && name === "The Job Seeker") {
      // 1 month plan 1
      priceID = "price_1MUJgcCrFeMLxUJzLgbBiM9U";
    } else if (!planState && name === "The Job Seeker") {
      // 3 month plan 1
      priceID = "price_1MUJgcCrFeMLxUJz9tUVx1dW";
    } else if (planState && name === "The Career Builder") {
      // 1 month plan 2
      priceID = "price_1MUJhyCrFeMLxUJzetCNH38b";
    } else if (!planState && name === "The Career Builder") {
      // 3 months plan 2
      priceID = "price_1MUJhyCrFeMLxUJz3xejmLY9";
    }
    // ! development priceID
    priceID = "price_1MUJwNCrFeMLxUJz2Synvyfm";
    dispatch(createCheckout({ priceID: priceID })).then((body) => {
      window.location.href = body.payload.url;
    });

    // const body = await res.json()
    // window.location.href = body.url
  }

  return (
    <>
      <div className={`pricing__tier ${popular + "__margin"}`}>
        <div className={`pricing__tier-highlight ${popular}`}>
          <h4 className="pricing__tier-highlight_text">MOST POPULAR</h4>
        </div>

        <div className="pricing__tier-info">
          <div className="pricing__tier-header">
            <h2 className="pricing__tier-name">{name}</h2>
            <div className="pricing__tier-price_container">
              <h3 className="pricing__tier-price">
                {currency}
                {price}
              </h3>
              <p className="pricing__tier-price_month">/month</p>
            </div>
            <p>{description}</p>
          </div>

          <div className="button__container pricing__button">
            <button
              className="button"
              onClick={() => {
                handleCheckout();
              }}
            >
              Get Started
            </button>
          </div>

          <div className="pricing__benefit-container">
            <div className="pricing__benefits">
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">{search} monthly searches</p>
            </div>
            <div className="pricing__benefits">
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">Unlimited monthly messages</p>
            </div>
            <div className={`pricing__benefits ${extension}`}>
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">Browser extension</p>
            </div>
            <div className={`pricing__benefits ${templates}`}>
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">Message templates</p>
            </div>
            <div className={`pricing__benefits ${second}`}>
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">2nd & 3rd degree contacts</p>
            </div>
            <div className={`pricing__benefits ${bulk}`}>
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">Bulk searches</p>
            </div>
            <div className={`pricing__benefits ${reply}`}>
              <span className="material-icons copied__check">check_circle</span>
              <p className="cta__text">A/B test templates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTierHeader;
