import React from 'react'
import './process.css'

const Process = () => {
  return (
    <div className='process'>
        <h4 className='process__header'>How It Works:</h4>
        <div className='process__steps-container'>
            <div className="text__content">
                <p>Text content</p>
            </div>
            <div className="middle__gutter"/>
            <div className='image__content'>
                <p>Image content</p>
            </div>
        </div>
    </div>
  )
}

export default Process