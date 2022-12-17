import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';

const navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='inner__navbar'>
        <div className='navbar__logo'>
          <Link to="/"><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
          <h2>Rocketstart</h2>
        </div>
        <nav className='navbar__items'>
          <ul className='menu'>
            <li className='menu__item'>
              <h3><Link to='/product'>Product</Link></h3>
            </li>
            <li className='menu__item'>
              <h3><Link to="/blog">Blog</Link></h3>
            </li>
            <li className='menu__item'>
              <h3><Link to="/pricing">Pricing</Link></h3>
            </li>
            <li className='menu__item'>
              <h3><Link to="/about">About</Link></h3>
            </li>
          </ul>
          <div className='button__container'>
          <Link to='/message'>
            <button className='navbar__button'>
                <p className='navbar__button-text'>Dashboard</p>
            </button>
          </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default navbar