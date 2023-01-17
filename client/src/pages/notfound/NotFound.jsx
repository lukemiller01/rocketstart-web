import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar3 } from '../../components';
import { Helmet } from 'react-helmet';

const NotFound = () => {

  const umami = window.umami
  umami.trackView('/*');

  return (
    <div>
        <Helmet>
          <title>404 · Rocketstart</title>
        </Helmet>
        <Navbar3/>
        <div className='login'>
        <h1>404 Not Found</h1>
          <div className='auth__result'>
            <p className='auth__result-paragraph'>Oops... nothing to see here.</p>
            <Link className='home__button' to={'/'}>
              Home
            </Link>
          </div>
        </div>
    </div>
  )
}

export default NotFound