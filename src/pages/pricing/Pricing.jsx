import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PriceTier from '../../components/priceTierHeader/PriceTierHeader';
import './pricing.css';

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <div className='pricing'>
        <div className='pricing__header'>
          <h4>Pricing</h4>
          <p>Choose what's right for you. Change your plan at any time.</p>
        </div>
        <div className='pricing__table'>
          <div className='pricing__descriptions'>
            <p className='title__text'>Monthly or Yearly</p>
          </div>
          <PriceTier name={"Free"} price={"$0"} borderClass={'border__both'}/>
          <PriceTier name={"Standard"} price={"$25"} borderClass={'border__right'}/>
          <PriceTier name={"Pro"} price={"$50"} borderClass={''}/>
        </div>
      </div>
    </div>
  )
}

export default Pricing