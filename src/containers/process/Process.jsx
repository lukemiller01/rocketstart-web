import React from 'react'
import './process.css'
import step1 from '../../assets/HowToOne.png'
import step2 from '../../assets/HowToTwo.png'

const Process = () => {
  return (
    <div className='process'>
        <div className='process__header'>
          <h4>How It Works:</h4>
          <h2>Give yourself an unfair advantage.</h2>
        </div>
        <div className='process__steps-container'>
          <div className="text__content">
            <h4 className='step'>Find Your Contact</h4>
            <p>
              Discover the point of contact for any job posting with just a URL.
            </p>
            <p className="learn__more-process"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
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
            <p>
              Design a LinkedIn introduction to maximize your reply rate.
            </p>
            <p className="learn__more-process"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
          </div>
        </div>
    </div>
  )
}

export default Process