import React from 'react'
import './header.css'
import headerDemo from '../../assets/header-demo.mp4'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div className="header">
      <div className="header__content-container">
        <div className="left__content">
          <h1>
            <font className='color__change'>Stand Out </font>
            In Every Job Application.
          </h1>
          <div className='cta__benefit-container'>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>
                  Discover the recruiter & hiring manager for 
                  <font className='weight__change'> any </font>
                  job
                </p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>
                  Maximize reply rates on LinkedIn with text analysis
                </p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                 <p className='cta__text'>Receive contact suggestions until you make a connection</p>
            </div>
        </div>
          <div className='button__container'>
            <Link to='/message'>
              <button className='button'>
                Start Now For Free
              </button>
            </Link>
          </div>
        </div>
        <div className="middle__gutter"/>
        <div className='right__content rocketstart__demo' >
          <video width="100%" height="100%" autoPlay loop muted>
            <source src={headerDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default header