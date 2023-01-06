import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css'

const SignIn = ({ setSignInModalOpen }) => {

  const [userData, setUserData] = useState({email: '', password: ''});

  async function handleFormSubmit(e) {
    e.preventDefault();
  
    try {
      // TODO
    } catch (e) {
      console.log(e)
    }
}

  return (
    <div>
      <div className='signup__bg'>
        <div className='signup'>
          <span className="material-icons exit__button" onClick={() => {setSignInModalOpen(false);}}>close</span>
          {/* <h4 className='signup__header'>Sign Up</h4> */}
        <div className='signup__content'>
          <form className='signup__fields' onSubmit={handleFormSubmit}>
                <input
                  className='signup__input'
                  required
                  placeholder="Email"
                  autoComplete='email'
                  name='email'
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
                <input
                  className='signup__input'
                  required
                  type='password'
                  autoComplete='new-password'
                  placeholder="Password"
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
                {/*disabled={loading}> */}
                <button type="submit" className='signup__button'>
                  Sign In
                </button>
          </form>
          <p className='signup__terms'>By signing up for Rocketstart you accept our&nbsp;
            <Link to='/terms-and-conditions' className='signup__terms-links'>
              Terms & Conditions&nbsp;
            </Link>
            and our&nbsp;
            <Link to='/privacy'  className='signup__terms-links'>
              Privacy Policy.
            </Link>
          </p>
          <p className='signup__signin'>Have an account?</p>
          <Link to='/sign_in' className='signup__terms-links'>
            <p className='signup__signin signup__terms-links'>Sign in</p>
            </Link>
          {/* <button onClick={signOut}>
            Sign Out
          </button> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn