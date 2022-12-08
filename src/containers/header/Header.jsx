import React from 'react'
import './header.css'
import rocketstartGif from '../../assets/rocketstart.gif'

const header = () => {
  return (
    <div class="header">
      <div class="header__content-container">
        <div class="left__content">
          <h1>Optimize LinkedIn Connection Requests</h1>
          <p>Rocketstart uses research-backed insights to help you craft the perfect connection request.</p>
          <div className='button__container'>
            <button className='button'>
              <p className='button__text'>Add to Chrome</p>
            </button>
          </div>
        </div>
        <div class="middle__gutter"/>
        <div class='right__content'>
          <img src={rocketstartGif} alt='rocketstart demonstration gif' className='rocketstart__gif'/>
        </div>
      </div>
    </div>
  )
}

export default header