import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import "./navbar2.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';
import { Account } from '../../modals';

// TODO: add icons to Message and Find tabs

const Navbar2 = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [communicateState, setCommunicateState] = useState(true);

  const [accountIconState, setAccountIconState ] = useState('expand_more');
  let icon = accountIconState ? 'expand_more' : 'expand_less';

  function handleModalOpen() {
    setModalOpen(!modalOpen);
    setAccountIconState(!accountIconState);
  }

  // Location for active element only on /account:
  const location = useLocation();
  const { pathname } = location;
  const split = pathname.split("/");

  return (
  <div className='navbar__container'>
    <div className='inner__navbar2'>
      <div className='navbar__logo'>
        <Link to="/" className='navbar__logo'><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
        <h2>Rocketstart</h2>
      </div>
      <nav>
        <ul className='menu'>

          <li className='menu__item navbar__item-focused'>
            <h3>
              <NavLink to='/message' className={({ isActive }) => isActive ? 'active__menu' : ''} style={{display: 'flex'}}>
                <h3>Message</h3>
                <span className="material-symbols-outlined navbar__account-icon_two">edit_square</span>
              </NavLink>
            </h3>
          </li>

          <li className='menu__item navbar__item-focused' onClick={handleModalOpen} onMouseEnter={() => {setCommunicateState(false)}} onMouseLeave={() => {setCommunicateState(true)}} >
              <NavLink className={split[1] === "account" ? "active__menu" : ""} style={{display: 'flex'}}>
                <h3>Account</h3>
                <span className="material-symbols-outlined navbar__account-icon">{icon}</span>
              </NavLink>
          </li>

          {/* <li className='menu__item'>
            <h3><NavLink to='/find' className={({ isActive }) =>
                isActive ? 'active__menu' : ''
            }>Search</NavLink></h3>
          </li> */}
          
        </ul>
      </nav>
    </div>
    {modalOpen && <Account setModalOpen={setModalOpen} setAccountIconState={setAccountIconState} communicateState={communicateState}/>}
  </div>
  )
}

export default Navbar2