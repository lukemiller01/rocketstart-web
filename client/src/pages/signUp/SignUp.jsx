import React from 'react';
import { createUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import './signUp.css';
import { Navbar3 } from '../../components';

const SignUp = () => {

    // Set data to BE
    const navigate = useNavigate();
    const [userData, setUserData] = useState({first: '', last: '', email: '', password: '', confirm: ''});
    const dispatch = useDispatch();
    // TODO: FLAG
    // const { register, logOut } = useUserAuth();
    const { register } = useUserAuth();

    // useEffect(() => {
    //   if (currentUser) {
    //     navigate("/message");
    //   }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
      
        try {
          dispatch(createUser(userData));
          await register(userData.email, userData.password);
          navigate("/message");
        } catch (e) {
          console.log(e)
        }
    }

    // TODO: FLAG
    // function signOut() {
    //   logOut();
    // }

  return (
    <div>
      <Navbar3/>
      <div className='signup'>
        <h1 className='signup__header'>Sign Up</h1>
        <form className='signup__fields' onSubmit={handleFormSubmit}>
            <div className='signup__name-container'>
              <input
                className='signup__input signup__input-name'
                autoFocus
                required
                name='first name'
                autoComplete='given-name'
                placeholder="First Name"
                onChange={(e) => setUserData({...userData, first: e.target.value})}
              />
              <input
                className='signup__input signup__input-name'
                required
                name='last name'
                autoComplete='family-name'
                placeholder="Last Name"
                onChange={(e) => setUserData({...userData, last: e.target.value})}
              />
            </div>
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
            <input
              className='signup__input'
              required
              type='password'
              autoComplete='new-password'
              placeholder="Confirm Password"
              onChange={(e) => setUserData({...userData, password: e.target.value})}
            />
            {/* <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div> */}
            {/*disabled={loading}> */}
            <button type="submit" className='signup__button'>
              Register
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
        {/* <button onClick={signOut}>
          Sign Out
        </button> */}
      </div>
    </div>
  )
}

export default SignUp