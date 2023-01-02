import React from 'react';
import './priceTierHeader.css';

const PriceTierHeader = ({name, price, toggle}) => {

  let quarterlyPrice = price * 3;

  return (
    <div className='pricing__tier'>
      <div className='pricing__tier-header'>
        <h2>{name}</h2>
          <div className='price__text'>
              <h4 className='pricing__price'>${price}</h4>
              <p className='title__text'>/ MONTH</p>
          </div>
          <p className={`title__text ${toggle}`}>${quarterlyPrice} / QUARTER</p>
      </div>
    </div>
  )
}

export default PriceTierHeader