import React from 'react';
import './footer.css';
import LinkedIn from '../../assets/linkedin.png';
import YouTube from '../../assets/youtube.png';
import RocketstartLogo from '../../assets/rocketstartLogo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__menu'>
            <div className='column__one'>
                <p className='column__header footer__paragraph'>Rocketstart</p>
                <Link to='/product'><p className='footer__paragraph'>Product</p></Link>
                <Link to='/blog'><p className='footer__paragraph'>Blog</p></Link>
                <Link to='/about'><p className='footer__paragraph'>About</p></Link>
            </div>
            <div className='column__two'>
                <p className='column__header footer__paragraph'>Resources</p>
                <p className='footer__paragraph'>Terms & Conditions</p>
                <Link to='/privacy'><p className='footer__paragraph'>Privacy Policy</p></Link>
            </div>
            <div className='column__three'>
                <p className='column__header footer__paragraph'>Support</p>
                <p className='footer__paragraph'>FAQ</p>
                <p className='footer__paragraph'>Contact Us</p>
            </div>
        </div>
        <hr></hr>
        <div className='footer__bar'>
            <div className='navbar__logo'>
                <img src={RocketstartLogo} alt="logo" className='image__logo'></img>
                <h2>Rocketstart</h2>
            </div>
            <div className='footer__middle'>
                <p className='footer__paragraph'>2022 © Rocketstart. All Rights Reserved.</p>
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