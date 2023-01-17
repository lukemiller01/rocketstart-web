import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useUserAuth } from '../../context/AuthProvider'
import { resendVerification } from '../../actions/userActions';
import './verification.css'

const Verification = ({userEmail}) => {

  const { user, changeEmail } = useUserAuth();
  
  const dispatch = useDispatch();

  // Ref for focus element:
  const emailRef = useRef(null);

  // Final user email
  const [email, setEmail] = useState(userEmail);
  // User email state in FE
  const [typedEmail, setTypedEmail] = useState('');
  // Button text change
  const [buttonText, setButtonText] = useState('Edit Email or Resend');
  // Input visibility
  const [inputVis, setInputVis] = useState('');

  // Resend verification email
  async function resendVerificationEmail(e) {
    try {
      setEmail(typedEmail);
      await changeEmail(typedEmail);
      dispatch(resendVerification(user.uid, {email: typedEmail}));
    } catch (e) {
      console.log(e)
    }
  }

  // When user is typing, but hasn't confirmed the email
  function editingEmail(typed) {
    setTypedEmail(typed);
    if(typed === '') {
      setButtonText('Cancel');
      // TODO: input display none
    }
    else {
      setButtonText('Resend Verification Email');
    }
  }

  // When the user clicks confirm
  function handleEmailEdit() {
    if(buttonText === "Edit Email or Resend") { // USER STARTS ACTION. Change from "Edit Email or Resend" to "Cancel"
      setButtonText('Cancel');
      setInputVis('opened__verification-input')
      // When button text is cancel or confirm, the email is visibile. When button text is Edit Email or Resend, email is none.
      // TODO: input display flex
    }
    else if(buttonText === "Cancel"){ // USER CANCELS ACTION. Change from "Cancel" to "Edit Email or Resend"
      setInputVis('')
      setButtonText('Edit Email or Resend');
      // TODO: input display none
    }
    else if(buttonText === "Resend Verification Email") { // Handle email change
      setInputVis('')
      setButtonText('Edit Email or Resend');
      setTypedEmail(typedEmail);
      setEmail(typedEmail)
      resendVerificationEmail()
      // TODO: change user email
      // TODO: input display none
    }
  }

  useEffect(() => { // Listens for the button being clicked and adds focus to email
    emailRef.current.focus(); // Because element unfocuses on handleModalSwitch
   }, [buttonText])

  return (
    <div className='verification__bg'>
        <div className='verification__modal'>
            <h2 className='verification__modal-header'>Verification email sent!</h2>

            <p className='verification__modal-text-backup'>
                Please activate your account to get started.
            </p>

            <p className='verification__modal-text'>
                Email sent to:
            </p>

            <p><font className='verification__modal-email'> {email}</font></p>

            {/* <button type="submit" className='verification__button' onClick={() => {resendVerification()}}>
              Resend Verification Email
            </button> */}

            <input
                className={`verification__input ${inputVis}`}
                required
                placeholder="Email"
                autoComplete='email'
                name='email'
                ref={emailRef}
                onChange={(e) => editingEmail(e.target.value)}></input>

            <button type="submit" className='verification__button' onClick={handleEmailEdit}>
              {buttonText}
            </button>

        </div>
    </div>
  )
}

export default Verification