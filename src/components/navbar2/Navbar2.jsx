import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./navbar2.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';

// TODO: add icons to Message and Find tabs

const Navbar2 = () => {
  return (
    <div className='navbar__container'>
    <div className='inner__navbar2'>
      <div className='navbar__logo'>
        {/* <Link to="/"><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link> */}
        <img src={RocketstartLogo} alt="logo" className='image__logo'></img>
        <h2>Rocketstart</h2>
      </div>
      <nav className='navbar__items'>
        <ul className='menu'>
          <li className='menu__item'>
            <h3><NavLink to='/message' className={({ isActive }) =>
                isActive ? 'active__menu' : ''
            }>Message</NavLink></h3>
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
  </div>
  )
}

export default Navbar2