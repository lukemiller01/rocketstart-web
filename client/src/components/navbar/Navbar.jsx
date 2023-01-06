import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';
import { useState } from 'react';
import SignUp from '../../pages/signUp/SignUp';

const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='inner__navbar'>
        <div className='navbar__logo'>
          <Link to="/" className='navbar__logo'><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
          <h2>Rocketstart</h2>
          <ul className='menu'>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to='/product'>Product</Link></h3> */}
              <h3>Product</h3>
            </li>
            <li className='menu__item'>
              <h3 ><Link to="/blog" className='navbar__item-focused'>Blog</Link></h3>
            </li>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to="/pricing">Pricing</Link></h3> */}
              <h3>Pricing</h3>
            </li>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to="/about">About</Link></h3> */}
              <h3>About</h3>
            </li>
          </ul>
        </div>
        <nav className='navbar__items'>
          <Link to='/sign_in' className='navbar__item-focused'>
            <h3>Sign In</h3>
          </Link>
          {/* <div className='button__container'>
            <Link to='/register'>
              <button className='navbar__button'>
                Sign Up
              </button>
            </Link>
          </div> */}
          <div className='button__container'>
            <button className='navbar__button' onClick={() => {setModalOpen(true);}}>
              Sign Up
            </button>
          </div>
        </nav>
      </div>
      {modalOpen && <SignUp setModalOpen={setModalOpen} />}
    </div>
  )
}

export default Navbar