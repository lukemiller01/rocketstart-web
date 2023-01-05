import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PriceTier from '../../components/priceTier/PriceTier';
import './pricing.css';

const pricingData = [
  {
    name: "The Career Builder",
    price: "60",
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
  return (
    <div>
      <Navbar/>
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
      </div>
    </div>
  )
}

export default Pricing