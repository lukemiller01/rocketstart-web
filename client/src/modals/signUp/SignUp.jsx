import React from 'react';
import { createUser, resetPassword } from '../../actions/userActions';
import { Error } from '../../components'
import { useDispatch } from 'react-redux'
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import './signUp.css';

const SignUp = ({ setModalOpen, buttonText, setButtonState, question, answer, setBottomTextQState, setBottomTextAState, terms, setTermsTextState, reset, setResetTextState, password, setPasswordState, background, closeButton, setHeaderState, containerStyle }) => {

  // Set Firebase auth and send user data MongoDB
  const navigate = useNavigate();
  // Keeps track of user input
  const [userData, setUserData] = useState({email: '', password: ''});
  // Checks if the password is required for the form to be submitted
  const [passwordRequired, setPasswordRequired] = useState(true);
  const dispatch = useDispatch();
  const { register, logIn } = useUserAuth();

  // Ref for focus element:
  const emailRef = useRef(null);

  // Handle modal close
  function modalClose() {
    setModalOpen(false);
    document.body.style.overflow = "auto"
  }

  // Error handling
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleFormSubmit(e) {

    setError(false);

    if(buttonText === "Sign In") { // Sign in logic
      e.preventDefault();

      try {
        await logIn(userData.email, userData.password);
        navigate("/message");
      }
      catch (error) {
        if(error.code === "auth/wrong-password") {
          setErrorMessage('Incorrect password.');
          setError(true);
        }
        else if(error.code === "auth/too-many-requests") {
          setErrorMessage('Too many attempts. Please try in a few minutes.');
          setError(true);
        }
        else if(error.code === "auth/invalid-email") {
          setErrorMessage('The email you enteres is invalid.');
          setError(true);
        }
        else if(error.code === "auth/user-not-found") {
          setErrorMessage('No account exists with this email.');
          setError(true);
        }
        else {
          setErrorMessage(error.code);
          setError(true);
        }
      }

    }
    else if (buttonText === "Create Account" ) { // Sign up logic
      e.preventDefault();

      try {
        await register(userData.email, userData.password);
        dispatch(createUser({email: userData.email}));
        window.umami.trackEvent('Sign Up');
        navigate("/message");
      } catch (error) {
        if(error.code === 'auth/email-already-in-use') {
          setErrorMessage('An account with this email already exists.');
          setError(true);
        }
        else if(error.code === "auth/internal-error") {
          setErrorMessage('An internal error occured. Please try again.');
          setError(true);
        }
        else if(error.code === "auth/invalid-email") {
          setErrorMessage('The email you enteres is invalid.');
          setError(true);
        }
        else if(error.code === "auth/too-many-requests") {
          setErrorMessage('Too many attempts. Please try in a few minutes.');
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
    else if (buttonText === "Reset Password") { // Reset password logic
      e.preventDefault();

      try {
        dispatch(resetPassword({email: userData.email}));
        setButtonState("Sign In");
        setBottomTextQState('No Account?');
        setBottomTextAState("Create One");
        setTermsTextState(false);
        setResetTextState(false);
        setPasswordState(true);
        if(containerStyle === 'signup__login') {
          setHeaderState('Welcome back!');
        }
      } catch (error) {
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
  }

  // To handle the modal change between Sign Up and Sign In
  function handleModalSwitch(type) {
    emailRef.current.focus(); // Because element unfocuses on handleModalSwitch
    setError(false);
    if(type && buttonText === "Sign In") {
      setButtonState("Create Account");
      setBottomTextQState('Have An Account?');
      setBottomTextAState("Sign In");
      setTermsTextState(true);
      setResetTextState(true);
      setPasswordState(true);
      if(containerStyle === 'signup__login') {
        setHeaderState('Create a Free Account');
      }
      setPasswordRequired(true);
    }
    else if ((type && buttonText === "Create Account") || (type && buttonText === "Reset Password")) {
      setButtonState("Sign In");
      setBottomTextQState('No Account?');
      setBottomTextAState("Create One");
      setTermsTextState(false);
      setResetTextState(false);
      setPasswordState(true);
      if(containerStyle === 'signup__login') {
        setHeaderState('Welcome back!');
      }
      setPasswordRequired(true);
    }
    else {
      setButtonState("Reset Password");
      setBottomTextQState(false);
      setBottomTextAState("Cancel");
      setResetTextState(true);
      setPasswordState(false);
      if(containerStyle === 'signup__login') {
        setHeaderState('Reset Password');
      }
      setPasswordRequired(false);
    }
  }

  return (
    <div> 
      <div className={`${background}`}>
        <div className={`${containerStyle}`}>
          <span className={`material-icons exit__button ${closeButton}`} onClick={modalClose}>close</span>
          {/* <h4 className='signup__header'>Sign Up</h4> */}
        <div className='signup__content'>
          <form className='signup__fields' onSubmit={handleFormSubmit}>
                <input
                  className='signup__input'
                  required
                  placeholder="Email"
                  autoComplete='email'
                  name='email'
                  autoFocus
                  enterKeyHint='next'
                  ref={emailRef}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
                <input
                  className={`signup__input ${password}`}
                  required={passwordRequired}
                  type='password'
                  autoComplete='new-password'
                  placeholder="Password"
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
                {/*disabled={loading}> */}
                <button type="submit" className='signup__button'>
                  {buttonText}
                </button>
          </form>
          <p className={`signup__terms ${terms}`}>By signing up for Rocketstart you accept our&nbsp;
            <Link to='/terms' className='signup__terms-links'>
              Terms of Service&nbsp;
            </Link>
            and our&nbsp;
            <Link to='/privacy'  className='signup__terms-links'>
              Privacy Policy.
            </Link>
          </p>
          <p className={`signup__reset signup__terms-links ${reset}`} onClick={() => {handleModalSwitch(false);}}>Reset Password</p>
          <div className='signup__question-answer'>
            <p className='signup__signin'>{question}&nbsp;</p>
            <div onClick={() => {handleModalSwitch(true);}}>
              <p className='signup__signin signup__terms-links'>{answer}</p>
            </div>
          </div>
          {error && <Error message={errorMessage}/>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp