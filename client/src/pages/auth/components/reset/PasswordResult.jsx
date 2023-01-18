import React from 'react';
import { Navbar3, ErrorBox } from '../../../../components';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useUserAuth } from '../../../../context/AuthProvider';
import { Helmet } from 'react-helmet';
import './passwordResult.css';

const PasswordResult = ({actionCode}) => {

    const navigate = useNavigate();
    // Ref for focus element:
    const passwordRef = useRef(null);
    const [userInput, setUserInput] = useState({password: '', confirmPassword: ''});
    const { resetPassword } = useUserAuth();

    // Error handling
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleFormSubmit(e) {
        e.preventDefault();
        setError(false);
    
        try {
            if(userInput.password === userInput.confirmPassword) {
              await resetPassword(actionCode, userInput.password);
              navigate("/login");
            }
            else {
              setErrorMessage('Passwords do not match.');
              setError(true);
            }
        }
        catch (error) {
          if(error.code === "auth/too-many-requests") {
            setErrorMessage('Too many attempts. Please try in a few minutes.');
            setError(true);
          }
          else if(error.code === "auth/internal-error") {
            setErrorMessage('An internal error occured. Please try again.');
            setError(true);
          }
          else if(error.code === "auth/weak-password") {
            setErrorMessage('Your password must be at least 6 characters.');
            setError(true);
          }
          else {
            setErrorMessage(error.code);
            setError(true);
          }
        }
    }

  return (
    <div>
      <Helmet>
        <title>Reset Password · Rocketstart</title>
      </Helmet>
    <Navbar3/>
    <div className='login'>
    <h1>Reset Your Password</h1>
      <div className='password__result'>
        <form className='signup__fields' onSubmit={handleFormSubmit}>
             <input
              className='signup__input'
              placeholder="Email"
              autoComplete='email'
              name='email'
              autoFocus
              hidden
            />
            <input
            className='signup__input'
            required
            placeholder="Password"
            type='password'
            autoComplete='new-password'
            name='password'
            autoFocus
            ref={passwordRef}
            onChange={(e) => setUserInput({...userInput, password: e.target.value})}
            />
            <input
            className='signup__input'
            required
            type='password'
            autoComplete='new-password'
            placeholder="Confirm Password"
            onChange={(e) => setUserInput({...userInput, confirmPassword: e.target.value})}
            />
            <button type="submit" className='signup__button'>
                Reset Password
            </button>
        </form>
        {error && <ErrorBox message={errorMessage}/>}
      </div>
    </div>
</div>
  )
}

export default PasswordResult