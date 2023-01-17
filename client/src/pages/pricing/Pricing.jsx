import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/navbar/Navbar';
import PriceTier from '../../components/priceTier/PriceTier';
import './pricing.css';

const pricingData = [
  {
    name: "The Career Builder",
    price: "60",
    currency: "$",
    description: "Search 1st, 2nd, and 3rd degree contacts for all your applications in one click.",
    search: "120",
    extension: true,
    second: true,
    bulk: true,
    templates: true,
    reply: true,
    popular: false,
  },
  {
    name: "The Job Seeker",
    price: "29",
    currency: "$",
    description: "Discover the recruiter & hiring manager for any job.",
    search: "30",
    extension: true,
    second: false,
    bulk: false,
    templates: true,
    reply: false,
    popular: true,
  },
  {
    name: "The Networker",
    price: "0",
    currency: "$",
    description: "Optimize LinkedIn invitation messages.",
    search: "3",
    extension: false,
    second: false,
    bulk: false,
    templates: false,
    reply: false,
    popular: false,
  },
]

const Pricing = () => {

  const umami = window.umami
  umami.trackView('/pricing');

  // Button for currency conversion
  const [btnState, setBtnState ] = useState(false);
  // Icon for currency conversion
  const [iconState, setIconState ] = useState(false);
  // Currency sign
  const [currencyState, setCurrencyState] = useState("USD ($)");
  // Plan state
  const [planState, setPlanState] = useState(true);

  // Monthly button state
  const [monthlyState, setMonthlyState] = useState(false);
  // Quarterly button state
  const [quarterlyState, setQuarterlyState] = useState(false);

  let monthly = monthlyState ? '' : 'pricing__period-color';
  let quarterly = quarterlyState ? 'pricing__period-color' : '';

  function handleClick() {
    setBtnState(btnState => !btnState);
    setIconState(iconState => !iconState);
  }

  function currencyChange(currency) {
    setCurrencyState(currency)
    setBtnState(btnState => !btnState);

    // Currency conversion:
    if(currency === "USD ($)") {
      pricingData[0]["currency"] = "$";
      pricingData[1]["currency"] = "$";
      pricingData[2]["currency"] = "$";
      if(planState) {
        pricingData[0]["price"] = "60";
        pricingData[1]["price"] = "29";
        pricingData[2]["price"] = "0";
      }
      else {
        pricingData[0]["price"] = "48";
        pricingData[1]["price"] = "23";
        pricingData[2]["price"] = "0";
      }
    }
    else if (currency === "EUR (€)") {
      pricingData[0]["currency"] = "€";
      pricingData[1]["currency"] = "€";
      pricingData[2]["currency"] = "€";
      if(planState) {
        pricingData[0]["price"] = "57";
        pricingData[1]["price"] = "28";
        pricingData[2]["price"] = "0";
      }
      else {
        pricingData[0]["price"] = "46";
        pricingData[1]["price"] = "22";
        pricingData[2]["price"] = "0";
      }
    }
    else if (currency === "INR (₹)") {
      pricingData[0]["currency"] = "₹";
      pricingData[1]["currency"] = "₹";
      pricingData[2]["currency"] = "₹";
      if(planState) {
        pricingData[0]["price"] = "5000";
        pricingData[1]["price"] = "2400";
        pricingData[2]["price"] = "0";
      }
      else {
        pricingData[0]["price"] = "4000";
        pricingData[1]["price"] = "2000";
        pricingData[2]["price"] = "0";
      }
    }
  }

  function planChange(plan) {
    setMonthlyState(monthlyState => !monthlyState);
    setQuarterlyState(quarterlyState => !quarterlyState);

    if(plan) { // 1 month
      setPlanState(true);
      if(currencyState === "USD ($)") {
        pricingData[0]["price"] = "60";
        pricingData[1]["price"] = "29";
        pricingData[2]["price"] = "0";
      }
      else if (currencyState === "EUR (€)") {
        pricingData[0]["price"] = "57";
        pricingData[1]["price"] = "28";
        pricingData[2]["price"] = "0";
      }
      else if (currencyState === "INR (₹)") {
        pricingData[0]["price"] = "5000";
        pricingData[1]["price"] = "2400";
        pricingData[2]["price"] = "0";
      }
    }
    else { // 3 months
      setPlanState(false);
      if(currencyState === "USD ($)") {
        pricingData[0]["price"] = "48";
        pricingData[1]["price"] = "23";
        pricingData[2]["price"] = "0";
      }
      else if (currencyState === "EUR (€)") {
        pricingData[0]["price"] = "46";
        pricingData[1]["price"] = "22";
        pricingData[2]["price"] = "0";
      }
      else if (currencyState === "INR (₹)") {
        pricingData[0]["price"] = "4000";
        pricingData[1]["price"] = "2000";
        pricingData[2]["price"] = "0";
      }
    }
  }

  let toggleClass = btnState ? ' pricing__visible' : ' pricing__hidden';
  let accordion = iconState ? 'expand_less' : 'expand_more';

  return (
    <div>
      <Navbar/>
      <Helmet>
        <title>Pricing · Rocketstart</title>
      </Helmet>
      <div className='pricing'>
        <h1>
          Land Your
          <font className='color__change'> Dream Job </font>
        </h1>
        <div className='pricing__tiers'>
          {pricingData.map((item, index) => (
              <PriceTier
              name={item.name}
              price={item.price}
              currency={item.currency}
              description={item.description}
              search={item.search}
              extension={item.extension}
              second={item.second}
              bulk={item.bulk}
              templates={item.templates}
              reply={item.reply}
              popular={item.popular}
              key={index}/>
              ))}
        </div>

        <div className='pricing__options'>
          <div>
            <button className='pricing__button-container' onClick={handleClick}>
              {currencyState}
              <span className="material-symbols-outlined">{accordion}</span>
            </button>
            <div className={`pricing__currency-options ${toggleClass}`}>
              <p className='pricing__currency pricing__currencies-border' onClick={() => currencyChange("USD ($)")}>USD ($)</p>
              <p className='pricing__currency pricing__currencies-border' onClick={() => currencyChange("EUR (€)")}>EUR (€)</p>
              <p className='pricing__currency' onClick={() => currencyChange("INR (₹)")}>INR (₹)</p>
            </div>
          </div>
          <div className='pricing__plans'>
            <button className={`pricing__plan-options ${monthly}`} onClick={() => planChange(true)}>1 month</button>
            <button className={`pricing__plan-options ${quarterly}`}  onClick={() => planChange(false)}>
              3 months
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing