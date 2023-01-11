import React from 'react';
import { Navbar3 } from '../../../../components';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useUserAuth } from '../../../../context/AuthProvider'
import './passwordResult.css';

const PasswordResult = ({actionCode}) => {

    const navigate = useNavigate();
    // Ref for focus element:
    const passwordRef = useRef(null);
    const [userInput, setUserInput] = useState({password: '', confirmPassword: ''});
    const { resetPassword } = useUserAuth();

    async function handleFormSubmit(e) {
        e.preventDefault();
    
        try {
            if(userInput.password === userInput.confirmPassword) {
              await resetPassword(actionCode, userInput.password);
              navigate("/login");
            }
            else {
                // Error: passwords do not match
            }
        }
        catch (e) {
          console.log(e);
        }
    }

  return (
    <div>
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
      </div>
    </div>
</div>
  )
}

export default PasswordResult