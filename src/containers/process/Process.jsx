import React from 'react'
import './process.css'
import step1 from '../../assets/HowToOne.png'
import step2 from '../../assets/HowToTwo.png'
import { Link } from 'react-router-dom'

const Process = () => {
  return (
    <div className='process'>
        <h4 className='process__header'>How It Works:</h4>
        <div className='process__steps-container'>
          <div className="text__content">
            <h4 className='step'>Find Your Contact</h4>
            <p>Discover the point of contact for any job posting with just a URL. Rocketstart analyzes the job posting and finds the best contact.</p>
          </div>
          <div className="middle__gutter"/>
          <div className='image__content'>
            <img src={step1} alt='rocketstart demonstration gif' className='rocketstart__howto'/>
          </div>
        </div>
        <div className='process__steps-container'>
          <div className='image__content'>
            <img src={step2} alt='rocketstart demonstration gif' className='rocketstart__howto'/>
          </div>
          <div className="middle__gutter"/>
          <div className="text__content">
            <h4 className='step'>Craft Your Message</h4>
            <p>Design your LinkedIn introduction to maximize your reply rate. Rocketstart analyzes your text and suggests improvements from four powerful insights.</p>
          </div>
        </div>
        <Link to='/message'>
          <div className='button__container'>
            <button className='button'>
              <p className='button__text'>Start Now</p>
            </button>
          </div>
        </Link>
    </div>
  )
}

export default Process