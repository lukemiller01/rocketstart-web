import React from 'react';
import { Link } from 'react-router-dom';
import './callToAction.css';

const CallToAction = ({page}) => {

  function buttonClick() {
    window.umami.trackEvent(page);
  }

  return (
    <div className='call__to-action'>
        <h4 className='cta__header'>
          Ready to Land Your
          <font className='color__change'> Dream Job? </font>
        </h4>
        <Link to='/login'>
            <button className='button' onClick={buttonClick}>
              Get started for free
            </button>
        </Link>
    </div>
  )
}

export default CallToAction