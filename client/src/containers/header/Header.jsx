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
            Rocketstart finds the job poster for any job application
            and helps you craft a meaningful message to them.
          </p>
          <div className='button__container'>
          <Link to='/message'>
            <button className='button'>
              Start Now
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