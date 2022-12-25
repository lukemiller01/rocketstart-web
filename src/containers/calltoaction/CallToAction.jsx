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
                <p className='cta__text'>Save time by discovering the right contacts</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>Make the best first impressions to your recruiters</p>
            </div>
            <div className='cta__benefits'>
                <span className="material-icons copied__check">check_circle</span>
                <p className='cta__text'>Discover new contacts if you don't hear back</p>
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