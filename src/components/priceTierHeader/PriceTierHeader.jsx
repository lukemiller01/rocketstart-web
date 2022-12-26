import React from 'react';
import './priceTierHeader.css';
import { Link } from 'react-router-dom';

const PriceTierHeader = ({name, price}) => {
  return (
    <div className='pricing__tier'>
      <div className='pricing__tier-header'>
        <h2>{name}</h2>
          <div className='price__text'>
              <h4 className='pricing__price'>{price}</h4>
              <p className='title__text'>/ MONTH</p>
          </div>
          <Link to='/message'>
              <button className='pricing__button'>
                Start Now
              </button>
          </Link>
      </div>
    </div>
  )
}

export default PriceTierHeader