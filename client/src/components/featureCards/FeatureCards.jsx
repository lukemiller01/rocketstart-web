import React from 'react'
import './featureCards.css'

const FeatureCards = ({icon, header, text}) => {
  return (
    <div className='feature__card'>
        <span className="material-symbols-outlined feature__card-icon">{icon}</span>
        <h4 className='feature__card-header'>{header}</h4>
        <p className='feature__card-text'>{text}</p>
    </div>
  )
}

export default FeatureCards