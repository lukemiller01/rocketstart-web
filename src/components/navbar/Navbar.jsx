import React from 'react';
import "./navbar.css";

const navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='inner__navbar'>
        <div className='navbar__logo'>
          <h2>Rocketstart</h2>
        </div>
        <nav className='navbar__items'>
          <ul className='menu'>
            <li className='menu__item'>
              <h3>Product</h3>
              <span className="material-symbols-outlined">expand_more</span>
            </li>
            <li className='menu__item'>
              <h3>Blog</h3>
            </li>
            <li className='menu__item'>
              <h3>About</h3>
            </li>
          </ul>
          <div className='button__container'>
            <button className='navbar__button'>
              <p className='navbar__button-text'>Add to Chrome</p>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default navbar