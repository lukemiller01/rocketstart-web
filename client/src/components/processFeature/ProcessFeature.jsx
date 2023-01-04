import React from 'react'
import { Link } from 'react-router-dom'
import './processFeature.css'

const ProcessFeature = ({header, description, feature, icon}) => {
  return (
    <div className='process__steps-container'>
        <span className="material-symbols-outlined process__icon">{icon}</span>
        <h4 className='process__feature-header'>{header}</h4>
        <p className='process__para'>{description}</p>
        <Link to='/blog'>
          <div className='process__explore-container'>
            <h5 className='process__explore-text'>Explore {feature}</h5>
            <span className="material-symbols-outlined process__feature-icon">arrow_right_alt</span>
          </div>
        </Link>
    </div>
  )
}

export default ProcessFeature