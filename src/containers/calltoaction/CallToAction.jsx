import React from 'react';
import { Link } from 'react-router-dom';
import './callToAction.css';

const CallToAction = () => {
  return (
    <div className='call__to-action'>
        <h4 className='cta__header'>Accelerate your job search.</h4>
        <div className='cta__benefit-container'>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">done</span>
                <p className='cta__text'>Save time by discovering the right contacts</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">done</span>
                <p className='cta__text'>Make the best first impression</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">done</span>
                <p className='cta__text'>Discover new contacts if you don't hear back</p>
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

export default CallToAction