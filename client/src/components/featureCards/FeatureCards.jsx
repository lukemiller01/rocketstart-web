import React from 'react'
import './featureCards.css'

const FeatureCards = ({icon, header, text}) => {
  return (
    <div>
        <div className='feature__card'>
            <span className="material-symbols-outlined feature__card-icon">{icon}</span>
            <h3 className='feature__card-header'>{header}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default FeatureCards