import React from 'react'
import './header.css'
import rocketstartGif from '../../assets/demo.gif'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div className="header">
      <div className="header__content-container">
        <div className="left__content">
          <h1>Stand Out In Every Job Application.</h1>
          <p className='rs__description'>
            Rocketstart lets you find the recruiter for any job application in seconds
            and gives you the tools to make a meaningful connection.
          </p>
          <div className='button__container'>
          <Link to='/message'>
            <button className='button'>
              <p className='button__text'>Start Now</p>
            </button>
          </Link>
          </div>
        </div>
        <div className="middle__gutter"/>
        <div className='right__content'>
          <img src={rocketstartGif} alt='rocketstart demonstration gif' className='rocketstart__demo'/>
        </div>
      </div>
    </div>
  )
}

export default header