import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { resetPassword, resendVerification } from '../../actions/userActions';
import { Navbar2 } from '../../components';
import { useUserAuth } from '../../context/AuthProvider';
import { Helmet } from 'react-helmet'
import './account.css';

const Account = () => {

    const { user, changeEmail, logIn } = useUserAuth();

    // In case the user only chooses to set their password
    let oldUserEmail = user.email;

    // Keep track of user's input email
    const [userData, setUserData] = useState({email: '', password: ''});

    // Set password to viisble:
    const [passwordVisible, setPassWordVisible] = useState(false)

    // Keep track of button state
    const [buttonState, setButtonState] = useState('Edit Profile');

    // Alternate between setting the fields and setting the buttons display
    const [fieldsState, setFieldsState] = useState('fields');
    const [fieldsButtonState, setFieldsButtonState] = useState('fields__none');

    // Copy button:
    const [copy, setCopy] = useState(false);

    const dispatch = useDispatch();

    function handleEdit(e) {
        if(buttonState === 'Edit Profile') {
            setFieldsState("fields__none");
            setFieldsButtonState("fields");
            setButtonState('Save Profile');
        }
        else if(buttonState === "Save Profile") {
            setFieldsState("fields");
            setFieldsButtonState("fields__none");
            setButtonState('Edit Profile');

            handleFormSubmit(e);
        }
    }

    function cancelEdit() {
        setFieldsState("fields");
        setFieldsButtonState("fields__none");
        setButtonState('Edit Profile');
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        if(oldUserEmail !== userData.email && userData.email !== undefined) {
          try {
            await logIn(oldUserEmail, userData.password);
            await changeEmail(userData.email);
            dispatch(resendVerification(user.uid, {email: userData.email}));
          }
          catch (e) {
            console.log(e);
          }
        }
      }

    async function resetPass(e) {
        e.preventDefault();

        try {
            console.log(oldUserEmail);
            dispatch(resetPassword({email: oldUserEmail}));
            handlePassword();
        } catch (e) {
            console.log(e)
        }
    }

    function checkPasswordVisibility(e) {
        setUserData({...userData, email: e.target.value})
        if(e.target.value !== '') {
            setPassWordVisible(true);
        }
        else {
            setPassWordVisible(false);
        }
    }

    // Copied to clipboard animation
    const handlePassword = () => {
        setCopy(true)
        setTimeout(function () {
            setCopy(false)
            }, 3000);
    }

  return (
    <div>
        <Helmet>
            <title>Account · Rocketstart</title>
        </Helmet>
        <Navbar2/>
        <div className='account'>

            <h1 className='account__profile-header'>Your Profile</h1>

            <div className='account__fields-container'>
                <div className='account__fields'>
                    <h2 className='account__field-title'>Email:</h2>
                    <p className={`account__fields-paragraph ${fieldsState}`}>{user.email}</p>
                    <form className={`account__fields ${fieldsButtonState}`}>
                        <input
                            className='account__input'
                            required
                            placeholder="Email"
                            autoComplete='email'
                            name='email'
                            autoFocus
                            onChange={(e) => checkPasswordVisibility(e)}
                        />
                        <input
                            className={`account__input ${passwordVisible ? " fields" : "fields__none"}`}
                            required
                            type='password'
                            autoComplete='new-password'
                            placeholder="Password required"
                            onChange={(e) => setUserData({...userData, password: e.target.value})}
                        />
                    </form>
                </div>

                <div className='account__fields'>
                    <h2 className='account__field-title'>Password:</h2>
                    <p className={`account__fields-paragraph ${fieldsState}`}>•••••••</p>
                    <form onSubmit={(e) => resetPass(e)}>
                        <button className={`account__button account__password-width ${fieldsButtonState}`} type="submit">
                            Reset Password
                        </button>
                    </form>
                    <div className={`copied__container ${copy ? " fade__in" : ""}`} style={{gap: '.5rem'}}>
                        <p className='account__fields-paragraph ' >Reset Email Sent </p>
                        <span className="material-icons copied__check">done</span>
                    </div>
                </div>
            </div>

            <div className='account__buttons-container'>
                <button className='account__button' onClick={(e) => handleEdit(e)}>
                    {buttonState}
                </button>
                <button className={`account__button ${fieldsButtonState}`} onClick={cancelEdit}>
                    Cancel
                </button>
            </div>

        </div>
    </div>
  )
}

export default Account