import React from 'react'
import { Link } from 'react-router-dom'
import RocketstartLogo from '../../assets/rocketstartLogo.svg';

const Navbar3 = () => {
  return (
    <div className='navbar__container'>
      <div className='inner__navbar'>
        <div className='navbar__logo'>
          <Link to="/" className='navbar__logo'><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
          <h2>Rocketstart</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar3