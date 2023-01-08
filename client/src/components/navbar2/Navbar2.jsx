import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
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
              <NavLink to='/message' className={({ isActive }) => isActive ? 'active__menu' : ''}>
                Message
              </NavLink>
            </h3>
          </li>
          {/* onClick={() => {setModalOpen(!modalOpen)}} */}
          <li className='navbar__item-focused navbar__account' onClick={handleModalOpen} onMouseEnter={() => {setCommunicateState(false)}} onMouseLeave={() => {setCommunicateState(true)}}>
            <h3>Account</h3>
            <span className="material-symbols-outlined navbar__account-icon">{icon}</span>
          </li>
          {/* <li className='menu__item'>
            <h3><NavLink to='/find' className={({ isActive }) =>
                isActive ? 'active__menu' : ''
            }>Search</NavLink></h3>
          </li> */}
        </ul>
        <div className='button__container'>
        {/* <Link to='/account'>
          <button className='navbar__button'>
              <p className='navbar__button-text'>My Account</p>
          </button>
        </Link> */}
        </div>
      </nav>
    </div>
    {modalOpen && <Account setModalOpen={setModalOpen} setAccountIconState={setAccountIconState} communicateState={communicateState}/>}
  </div>
  )
}

export default Navbar2