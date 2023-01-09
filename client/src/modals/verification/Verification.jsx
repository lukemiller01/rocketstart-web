import React from 'react'
import './verification.css'

const Verification = ({userEmail}) => {
  return (
    <div className='verification__bg'>
        <div className='verification__modal'>
            <h2 className='verification__modal-header'>Welcome to Rocketstart!</h2>
            <p className='verification__modal-text'>
                We sent an email to
                <font className='verification__modal-email'> {userEmail}</font>
                .
            </p>
            <p className='verification__modal-text'>Please click on the link to activate your account. If you don't see an email, please make sure the above email is correct and check your spam folder.</p>
            <p className='verification__modal-text'>
                <font className='verification__modal-link'>Click here </font>
                to resend email verification email or change your email.</p>
        </div>
    </div>
  )
}

export default Verification