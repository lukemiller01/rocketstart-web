import React from 'react';
import { createUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import './signUp.css';

const SignUp = ({ setModalOpen, buttonText, setButtonState, question, answer, setBottomTextQState, setBottomTextAState, terms, setTermsTextState, reset, setResetTextState }) => {

    // Set data to BE
    const navigate = useNavigate();
    const [userData, setUserData] = useState({email: '', password: ''});
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

      if(buttonText === "Sign In") { // Sign in logic
        // TODO: fill
      }
      else { // Sign up logic
        e.preventDefault();

        try {
          dispatch(createUser(userData));
          await register(userData.email, userData.password);
          navigate("/message");
        } catch (e) {
          console.log(e)
        }
      }
    }

    // TO handle the modal change between Sign Up and Sign In
    function handleModalSwitch() {
      if(buttonText === "Sign In") {
        setButtonState(true);
        setBottomTextQState(true);
        setBottomTextAState(true);
        setTermsTextState(true);
        setResetTextState(true);
      }
      else {
        setButtonState(false);
        setBottomTextQState(false);
        setBottomTextAState(false);
        setTermsTextState(false);
        setResetTextState(false);
      }
    }

    // TODO: FLAG
    // function signOut() {
    //   logOut();
    // }

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
          <p className={`signup__reset signup__terms-links ${reset}`}>Reset Password</p>
          <div className='signup__question-answer'>
            <p className='signup__signin'>{question}&nbsp;</p>
            <div onClick={() => {handleModalSwitch();}}>
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