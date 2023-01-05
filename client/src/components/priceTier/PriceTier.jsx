import React from 'react';
import { Link } from 'react-router-dom';
import './priceTier.css';

const PriceTierHeader = ({name, price, currency, description, search, extension, second, bulk, templates, reply, popular}) => {

  return (
    <div className={`pricing__tier ${popular + "__margin"}`}>

      <div className={`pricing__tier-highlight ${popular}`}>
        <h4 className='pricing__tier-highlight_text'>MOST POPULAR</h4>
      </div>

      <div className='pricing__tier-info'>
        <div className='pricing__tier-header'>
          <h2 className='pricing__tier-name'>{name}</h2>
          <div className='pricing__tier-price_container'>
            <h3 className='pricing__tier-price'>{currency}{price}</h3>
            <p className='pricing__tier-price_month'>/month</p>
          </div>
          <p>{description}</p>
        </div>

        <div className='button__container pricing__button'>
          <Link to='/message'>
            <button className='button'>
              Get Started
            </button>
          </Link>
        </div>

        <div className='pricing__benefit-container'>
          <div className='pricing__benefits'>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>{search} monthly searches</p>
          </div>
          <div className='pricing__benefits'>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>Unlimited monthly messages</p>
          </div>
          <div className={`pricing__benefits ${extension}`}>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>Browser extension</p>
          </div>
          <div className={`pricing__benefits ${templates}`}>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>Message templates</p>
          </div>
          <div className={`pricing__benefits ${second}`}>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>2nd & 3rd degree contacts</p>
          </div>
          <div className={`pricing__benefits ${bulk}`}>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>Bulk searches</p>
          </div>
          <div className={`pricing__benefits ${reply}`}>
            <span className="material-icons copied__check">check_circle</span>
            <p className='cta__text'>A/B test templates</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PriceTierHeader