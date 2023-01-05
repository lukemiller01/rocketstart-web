import React from 'react';
import { createUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthProvider';

import './signUp.css';

const SignUp = () => {

    // Set data to BE
    const navigate = useNavigate();
    const [userData, setUserData] = useState({first: '', last: '', email: '', password: ''});
    const dispatch = useDispatch();
    // const { register } = useUserAuth();

    // useEffect(() => {
    //   if (currentUser) {
    //     navigate("/message");
    //   }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
      
        try {
          dispatch(createUser(userData));
          // await register(userData.email, userData.password);
          navigate("/message");
        } catch (e) {
          console.log(e)
        }
    }

  return (
    <div>
        Sign Up
        <form onSubmit={handleFormSubmit}>
          <div>
          <div>
              <input
                name="first"
                type="first"
                autoComplete="first"
                required
                placeholder="First Name"
                onChange={(e) => setUserData({...userData, first: e.target.value})}
              />
            </div>
            <div>
              <input
                name="last"
                type="last"
                autoComplete="last"
                required
                placeholder="Last Name"
                onChange={(e) => setUserData({...userData, last: e.target.value})}
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                onChange={(e) => setUserData({...userData, email: e.target.value})}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                onChange={(e) => setUserData({...userData, password: e.target.value})}
              />
            </div>
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
          </div>
          <div>
            {/* <button type="submit" disabled={loading}> */}
            <button type="submit">
              Register
            </button>
          </div>
        </form>
    </div>
  )
}

export default SignUp