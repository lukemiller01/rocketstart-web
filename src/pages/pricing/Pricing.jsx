import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PriceTierHeader from '../../components/priceTierHeader/PriceTierHeader';
import ToggleButton from '../../components/toggleButton/ToggleButton';

import './pricing.css';

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <div className="pricing">
        <div className='pricing__header'>
            <h4>Pricing</h4>
            <p>Choose what's right for you. Change your plan at any time.</p>
          </div>
        <table className="pricing__table">
          <thead>
            <tr>
              <td className="min" colSpan="3"></td>
              <td className="min"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pricing__period">
                <p className='pricing__period-text'>Monthly</p>
                <ToggleButton/>
                <p className='pricing__period-text'>Quarterly</p>
              </td>
              <td>
                <PriceTierHeader name={"Free"} price={"$0"}/>
              </td>
              <td>
                <PriceTierHeader name={"Standard"} price={"$24.99"}/>
              </td>
              <td>
                <PriceTierHeader name={"Pro"} price={"$49.99"}/>
              </td>
            </tr>
            {/* Row: header for Contact Finder Feature  */}
            <tr>
              <td>
                <p className='pricing__feature-header'>Contact Finder</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>Monthly Searches</p>
              </td>
              <td><p className='pricing__feature-spec'>2</p></td>
              <td><p className='pricing__feature-spec'>30</p></td>
              <td><p className='pricing__feature-spec'>100</p></td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>Browser Extension</p>
              </td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>2nd Tier Contacts</p>
              </td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
            </tr>

            {/* Row: header for Message Analysis Feature  */}
            <tr>
              <td>
                <p className='pricing__feature-header'>Message Insights</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>Monthly Messages</p>
              </td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">all_inclusive</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">all_inclusive</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">all_inclusive</span></td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>Message Templates</p>
              </td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
            </tr>
            <tr>
              <td>
                <p className='pricing__feature-sub'>Template Reply Rates</p>
              </td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">close</span></td>
              <td className='pricing__icon'><span className="material-icons pricing__feature-spec">done</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pricing