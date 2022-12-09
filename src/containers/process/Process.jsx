import React from 'react'
import './process.css'
import step1 from '../../assets/step1.png'
import step2 from '../../assets/step2.png'
import step3 from '../../assets/step3.png'
import step4 from '../../assets/step4.png'

const Process = () => {
  return (
    <div className='process'>
        <h4 className='process__header'>How It Works:</h4>
        <div className='process__steps-container'>
          <div className="text__content">
            <h4 className='step'>Send an Invitation</h4>
            <p>Remember to add a note!</p>
          </div>
          <div className="middle__gutter"/>
          <div className='image__content'>
            <img src={step1} alt='rocketstart demonstration gif' className='rocketstart__demo'/>
          </div>
        </div>
        <div className='process__steps-container'>
          <div className='image__content'>
            <img src={step2} alt='rocketstart demonstration gif' className='rocketstart__demo'/>
          </div>
          <div className="middle__gutter"/>
          <div className="text__content">
            <h4 className='step'>Open Rocketstart</h4>
            <p>Rocketstart will adjust to your window.</p>
          </div>
        </div>
        <div className='process__steps-container'>
          <div className="text__content">
            <h4 className='step'>Type Your Message</h4>
            <p>Rocketstart will analyze your text.</p>
          </div>
          <div className="middle__gutter"/>
          <div className='image__content'>
            <img src={step3} alt='rocketstart demonstration gif' className='rocketstart__demo'/>
          </div>
        </div>
        <div className='process__steps-container'>
          <div className='image__content'>
            <img src={step4} alt='rocketstart demonstration gif' className='rocketstart__demo'/>
          </div>
          <div className="middle__gutter"/>
          <div className="text__content">
            <h4 className='step'>Review Your Insights</h4>
            <p>Use Rocketstart to design the perfect message!</p>
          </div>
        </div>
        <div className='button__container'>
          <button className='button'>
            <p className='button__text'>Add to Chrome</p>
          </button>
        </div>
    </div>
  )
}

export default Process