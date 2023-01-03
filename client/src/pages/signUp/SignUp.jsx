import React from 'react';
import { createUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
// import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './signUp.css';

const SignUp = ({ currentId }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({first: '', last: '', email: '', password: ''});

    const user = useSelector((state) => currentId ? state.users.find((p) => p._id === currentId) : null );

    const dispatch = useDispatch();

    // TODO: reincorporate this!!!
    // const { user, register, setError } = useAuth();

    // Don't allow users to access registration while they're logged in
    useEffect(() => {
        if (user) {
          navigate("/message");
        }
    }, [user, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
      
        try {
          dispatch(createUser(userData))
          // setError("");
          // setLoading(true);
          // TODO: reincorporate this!!!
          // await register(userData);
          navigate("/message");
        } catch (e) {
          console.log("failed to register")
          // TODO: reincorporate this!!!
          // setError("Failed to register");
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