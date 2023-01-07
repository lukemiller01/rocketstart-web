import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';
import { useState } from 'react';
import { SignUp } from '../../modals';

const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [buttonState, setButtonState] = useState('');
  const [bottomTextQState, setBottomTextQState] = useState('');
  const [bottomTextAState, setBottomTextAState] = useState('');
  const [termsTextState, setTermsTextState] = useState('');
  const [resetTextState, setResetTextState] = useState('');
  const [passwordState, setPasswordState] = useState(true);

  function handleUserLogin(type) {
    // Opening the modal:
    setModalOpen(true);
    if(type) {
      setButtonState("Create Account");
      setBottomTextQState('Have An Account?');
      setBottomTextAState("Sign In");
      setTermsTextState(true);
      setResetTextState(true);
    }
    else {
      setButtonState("Sign In");
      setBottomTextQState('No Account?');
      setBottomTextAState("Create One");
      setTermsTextState(false);
      setResetTextState(false);
    }
  }

  let terms = termsTextState ? '' : 'signup__no-visibility';
  let reset = resetTextState ? 'signup__no-visibility' : '';
  let password = passwordState ? '' : 'signup__no-visibility';

  return (
    <div className='navbar__container'>
      <div className='inner__navbar'>
        <div className='navbar__logo'>
          <Link to="/" className='navbar__logo'><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
          <h2>Rocketstart</h2>
          <ul className='menu'>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to='/product'>Product</Link></h3> */}
              <h3>Product</h3>
            </li>
            <li className='menu__item'>
              <h3 ><Link to="/blog" className='navbar__item-focused'>Blog</Link></h3>
            </li>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to="/pricing">Pricing</Link></h3> */}
              <h3>Pricing</h3>
            </li>
            <li className='menu__item navbar__item-focused'>
              {/* <h3><Link to="/about">About</Link></h3> */}
              <h3>About</h3>
            </li>
          </ul>
        </div>
        <nav className='navbar__items'>
          <h3 className='navbar__item-focused' onClick={() => {handleUserLogin(false)}}>Sign In</h3>
          {/* <div className='button__container'>
            <Link to='/register'>
              <button className='navbar__button'>
                Sign Up
              </button>
            </Link>
          </div> */}
          <div className='button__container'>
            <button className='navbar__button' onClick={() => {handleUserLogin(true)}}>Sign Up</button>
          </div>
        </nav>
      </div>
      {modalOpen && <SignUp
        setModalOpen={setModalOpen} // To open and close the modal with the close button
        buttonText={buttonState} // The modal text button
        setButtonState={setButtonState} // To change the text if the user navigates to the other button
        question={bottomTextQState} // Text for the question
        answer={bottomTextAState} // Text for the answer
        setBottomTextQState={setBottomTextQState} // To set the question
        setBottomTextAState={setBottomTextAState} // To set the answer
        terms={terms} // Access to terms & privacy text
        setTermsTextState={setTermsTextState} // To set the term visibility
        reset={reset} // Access to Reset button
        setResetTextState={setResetTextState} // To set the reset visibility
        password={password} // Access to password button
        setPasswordState={setPasswordState} // To set password button
        />}
    </div>
  )
}

export default Navbar