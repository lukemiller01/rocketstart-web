import React from 'react';
import { Link } from 'react-router-dom';
import './callToAction.css';

const CallToAction = () => {
  return (
    <div className='call__to-action'>
        <h4 className='cta__header'>Give Yourself an Unfair Advantage.</h4>
        <div className='cta__benefit-container'>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>Save time by discovering the right recruiters & hiring managers</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>Make the best first impressions to anyone you reach out to</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>Discover secondary contacts if you don't hear back from the job poster</p>
            </div>
        </div>
        <Link to='/message'>
            <button className='button'>
              Start Now
            </button>
        </Link>
    </div>
  )
}

export default CallToAction