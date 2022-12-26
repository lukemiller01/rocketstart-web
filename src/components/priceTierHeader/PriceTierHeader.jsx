import React from 'react';
import './priceTierHeader.css';
import { Link } from 'react-router-dom';

const PriceTier = ({name, price, borderClass}) => {
  return (
    <div className={`pricing__tier ${borderClass}`}>
        <h2>{name}</h2>
        <div className='price__text'>
            <h4>{price}</h4>
            <p className='title__text'>/ MONTH</p>
        </div>
        <Link to='/message'>
            <button className='pricing__button'>
              Start Now
            </button>
        </Link>
    </div>
  )
}

export default PriceTier