import React from 'react'
import './header.css'
import rocketstartGif from '../../assets/rocketstart.gif'

const header = () => {
  return (
    <div className="header">
      <div className="header__content-container">
        <div className="left__content">
          <h1>Write the Perfect Invitation Note on LinkedIn.</h1>
          <p>Rocketstart helps you craft effective LinkedIn invitation notes to maximize your reply rates.</p>
          <div className='button__container'>
            <button className='button'>
              <p className='button__text'>Add to Chrome</p>
            </button>
          </div>
        </div>
        <div className="middle__gutter"/>
        <div className='right__content'>
          <img src={rocketstartGif} alt='rocketstart demonstration gif' className='rocketstart__gif'/>
        </div>
      </div>
    </div>
  )
}

export default header