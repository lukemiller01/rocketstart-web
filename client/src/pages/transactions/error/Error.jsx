import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar3 } from '../../../components'

const Error = () => {
  return (
    <div>
        <Helmet>
          <title>Authentication · Rocketstart</title>
        </Helmet>
        <Navbar3/>
        <div className='login'>
          <h1 className='auth__header'>An Error Occured</h1>
            <div className='auth__result'>
              <p className='auth__result-paragraph'>We couldn't complete your transaction. Please try again.</p>
              <Link className='home__button' to={'/pricing'}>
                Try Again
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Error