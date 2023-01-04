import React from 'react';
import { Link } from 'react-router-dom';
import './callToAction.css';

const CallToAction = () => {
  return (
    <div className='call__to-action'>
        <h4 className='cta__header'>
          Ready to Land Your
          <font className='color__change'> Dream Job? </font>
        </h4>
        <Link to='/message'>
            <button className='button'>
              Start Now For Free
            </button>
        </Link>
    </div>
  )
}

export default CallToAction