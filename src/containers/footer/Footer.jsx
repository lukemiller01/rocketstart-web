import React from 'react';
import './footer.css';
import LinkedIn from '../../assets/linkedin.png';
import YouTube from '../../assets/youtube.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__menu'>
            <div className='column__one'>
                <p className='column__header'>Rocketstart</p>
                <p>Features</p>
                <p>Blog</p>
                <p>About</p>
            </div>
            <div className='column__two'>
                <p className='column__header'>Resources</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className='column__three'>
                <p className='column__header'>Support</p>
                <p>FAQ</p>
                <p>Contact Us</p>
            </div>
            <div className='column__four'>
                <p className='column__header'>Install Now</p>
                <button className='navbar__button'>
                    <p className='navbar__button-text'>Add to Chrome</p>
                </button>
            </div>
        </div>
        <hr></hr>
        <div className='footer__bar'>
            <div className='navbar__logo'>
                <h2>Rocketstart</h2>
            </div>
            <div className='footer__middle'>
                <p>2022 © Rocketstart. All Rights Reserved.</p>
            </div>
            <div className='footer__social'>
                <img src={LinkedIn} alt='LinkedIn icon' className='footer__icon'/>
                <img src={YouTube} alt='YouTube icon' className='footer__icon'/>
            </div>
        </div>
    </div>
  )
}

export default Footer