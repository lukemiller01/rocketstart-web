import React from 'react';
import { createUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux'
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import './signUp.css';

const SignUp = ({ setModalOpen, buttonText, setButtonState, question, answer, setBottomTextQState, setBottomTextAState, terms, setTermsTextState, reset, setResetTextState, password, setPasswordState }) => {

    // Set Firebase and send data to MongoDB
    const navigate = useNavigate();
    const [userData, setUserData] = useState({email: '', password: ''});
    const dispatch = useDispatch();
    const { register, logIn } = useUserAuth();

    // Ref for focus element:
    const emailRef = useRef(null);

    // useEffect(() => {
    //   if (currentUser) {
    //     navigate("/message");
    //   }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {

      if(buttonText === "Sign In") { // Sign in logic
        e.preventDefault();

        try {
          await logIn(userData.email, userData.password);
          navigate("/message");
        }
        catch (e) {
          console.log(e);
        }

      }
      else if (buttonText === "Create Account" ) { // Sign up logic
        e.preventDefault();

        try {
          dispatch(createUser(userData));
          await register(userData.email, userData.password);
          navigate("/message");
        } catch (e) {
          console.log(e)
        }
      }
      else { // Reset password logic
        // TODO: fill
      }
    }

    // To handle the modal change between Sign Up and Sign In
    function handleModalSwitch(type) {
      emailRef.current.focus(); // Because element unfocuses on handleModalSwitch
      if(type && buttonText === "Sign In") {
        setButtonState("Create Account");
        setBottomTextQState('Have An Account?');
        setBottomTextAState("Sign In");
        setTermsTextState(true);
        setResetTextState(true);
        setPasswordState(true);
      }
      else if ((type && buttonText === "Create Account") || (type && buttonText === "Reset Password")) {
        setButtonState("Sign In");
        setBottomTextQState('No Account?');
        setBottomTextAState("Create One");
        setTermsTextState(false);
        setResetTextState(false);
        setPasswordState(true);
      }
      else {
        setButtonState("Reset Password");
        setBottomTextQState(false);
        setBottomTextAState("Cancel");
        setResetTextState(true);
        setPasswordState(false);
      }
    }

  return (
    <div>
      <div className='signup__bg'>
        <div className='signup'>
          <span className="material-icons exit__button" onClick={() => {setModalOpen(false);}}>close</span>
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
                  ref={emailRef}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
                <input
                  className={`signup__input ${password}`}
                  required
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
            <Link to='/terms-and-conditions' className='signup__terms-links'>
              Terms & Conditions&nbsp;
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
          {/* <button onClick={signOut}>
            Sign Out
          </button> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp