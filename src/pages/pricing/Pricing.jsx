import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import PriceTierHeader from '../../components/priceTierHeader/PriceTierHeader';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './pricing.css';

const Pricing = () => {

  const [ btnState, setBtnState ] = useState(false);
  const [ monthlyTextState, setMonthlyTextState ] = useState(false);
  const [ quarterlyTextState, setQuarterlyTextState ] = useState(false);
  const [ stdState, setStdState ] = useState(false);
  const [ proState, setProState ] = useState(false);
  const [ quarterlyState, setquarterlyState ] = useState(false);

  function handleClick() {
    // Button state
    setBtnState(btnState => !btnState);

    // Text state: 
    setMonthlyTextState(monthlyTextState => !monthlyTextState);
    setQuarterlyTextState(quarterlyTextState => !quarterlyTextState);


    // Cost state
    setStdState(stdState => !stdState);
    setProState(proState => !proState);

    // Tier Header state
    setquarterlyState(quarterlyState => !quarterlyState);
  }

  let toggleClass = btnState ? 'checked' : '';
  let monthly = monthlyTextState ? '' : 'pricing__period-text_color';
  let quarterly = quarterlyTextState ? 'pricing__period-text_color' : '';
  let toggleStd = stdState ? '19' : '24';
  let togglePro = proState ? '39' : '49';
  let toggleQuarter = quarterlyState ? 'pricing__visible' : 'pricing__hidden';

  return (
    <div>
      <Navbar/>
      <div className="pricing">
        <div className='pricing__header'>
            <h4>Pricing</h4>
            <p>Choose what's right for you. Change your plan at any time.</p>
          </div>
        <div className='pricing__table'>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td className='pricing__border-left'>
                  <PriceTierHeader name={"Free"} price={"0"} toggle={toggleQuarter}/>
                </td>
                <td className='pricing__border-left'>
                  <PriceTierHeader name={"Standard"} price={toggleStd} toggle={toggleQuarter}/>
                </td>
                <td className='pricing__border-left'>
                  <PriceTierHeader name={"Pro"} price={togglePro} toggle={toggleQuarter}/>
                </td>
              </tr>
              {/* Row: header for Contact Finder Feature  */}
              <tr className='pricing__border-bottom'>
                <td className='pricing__period-container'>
                  <p className={`pricing__period-text ${monthly}`}>Monthly</p>
                    {/* Button start  */}
                    <div>
                      <label className='switch'>
                        <input type="checkbox" className={{toggleClass}} onChange={handleClick}/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    {/* Button end  */}
                    <p className={`pricing__period-text ${quarterly}`}>Quarterly</p>
                </td>
                <td className='pricing__border-left'>
                  <Link to='/message' className='pricing__button-container'>
                    <button className='pricing__button'>
                      Start Now
                    </button>
                  </Link>
                </td>
                <td className='pricing__border-left'>
                  <Link to='/message' className='pricing__button-container'>
                    <button className='pricing__button'>
                      Start Now
                    </button>
                  </Link>
                </td>
                <td className='pricing__border-left'>
                  <Link to='/message' className='pricing__button-container'>
                    <button className='pricing__button'>
                      Start Now
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-header'>Contact Finder</p>
                </td>
                <td className='pricing__border-right'>
                  <p></p>
                </td>
                <td className='pricing__border-right'>
                  <p></p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Monthly Searches</p>
                </td>
                <td className='pricing__border-right'><p className='pricing__feature-spec'>2</p></td>
                <td className='pricing__border-right'><p className='pricing__feature-spec'>25</p></td>
                <td ><p className='pricing__feature-spec'>100</p></td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Browser Extension</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons green">done</span></td>
                <td className='pricing__icon'><span className="material-icons green">done</span></td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>2nd Tier Contacts</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon'><span className="material-icons green">done</span></td>
              </tr>
              <tr className='pricing__border-bottom'>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Bulk Searches</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon'><span className="material-icons green">done</span></td>
              </tr>

              {/* Row: header for Message Analysis Feature  */}
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-header'>Message Insights</p>
                </td>
                <td className='pricing__border-right'>
                  <p></p>
                </td>
                <td className='pricing__border-right'>
                  <p></p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Monthly Messages</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons">all_inclusive</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons">all_inclusive</span></td>
                <td className='pricing__icon'><span className="material-icons">all_inclusive</span></td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Message Templates</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons green">done</span></td>
                <td className='pricing__icon'><span className="material-icons green">done</span></td>
              </tr>
              <tr>
                <td className='pricing__border-right'>
                  <p className='pricing__feature-sub'>Template Reply Rates</p>
                </td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon pricing__border-right'><span className="material-icons red">close</span></td>
                <td className='pricing__icon'><span className="material-icons green">done</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Pricing