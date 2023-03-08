import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword, resendVerification } from "../../actions/userActions";
import { Navbar2, ErrorBox } from "../../components";
import { useUserAuth } from "../../context/AuthProvider";
import { Helmet } from "react-helmet";
import "./account.css";

const Account = () => {
  useEffect(() => {
    window.umami.trackView("/account");
  }, []);

  const navigate = useNavigate();

  const { user, changeEmail, logIn, logOut } = useUserAuth();

  // In case the user only chooses to set their password
  let oldUserEmail = user.email;

  // Keep track of user's input email
  const [userData, setUserData] = useState({ email: "", password: "" });

  // Set password to viisble:
  const [passwordVisible, setPassWordVisible] = useState(false);

  // Keep track of button state
  const [buttonState, setButtonState] = useState("Edit Profile");

  // Alternate between setting the fields and setting the buttons display
  const [fieldsState, setFieldsState] = useState("fields");
  const [fieldsButtonState, setFieldsButtonState] = useState(false);

  // Copy button:
  const [copy, setCopy] = useState(false);

  const dispatch = useDispatch();

  // Error handling
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleEdit(e) {
    setError(false);
    if (buttonState === "Edit Profile") {
      setFieldsState("fields__none");
      setFieldsButtonState(true);
      setButtonState("Save Profile");
    } else if (buttonState === "Save Profile") {
      setFieldsState("fields");
      setFieldsButtonState(false);
      setButtonState("Edit Profile");

      handleFormSubmit(e);
    }
  }

  function cancelEdit() {
    setError(false);
    setFieldsState("fields");
    setFieldsButtonState(false);
    setButtonState("Edit Profile");
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setError(false);

    if (oldUserEmail !== userData.email && userData.email !== undefined) {
      try {
        await logIn(oldUserEmail, userData.password);
        await changeEmail(userData.email);
        dispatch(resendVerification(user.uid, { email: userData.email }));
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect password.");
          setError(true);
        } else if (error.code === "auth/invalid-email") {
          setErrorMessage("The email you enteres is invalid.");
          setError(true);
        } else if (error.code === "auth/too-many-requests") {
          setErrorMessage("Too many attempts. Please try in a few minutes.");
          setError(true);
        } else if (error.code === "auth/email-already-in-use") {
          setErrorMessage("An account with this email already exists.");
          setError(true);
        } else if (error.code === "auth/internal-error") {
          setErrorMessage("An internal error occured. Please try again.");
          setError(true);
        } else {
          setErrorMessage(error.code);
          setError(true);
        }
      }
    } else {
      setErrorMessage("Email already in use");
      setError(true);
    }
  }

  async function resetPass(e) {
    e.preventDefault();
    setError(false);

    try {
      dispatch(resetPassword({ email: oldUserEmail }));
      handlePassword();
    } catch (error) {
      setErrorMessage(error.code);
      setError(true);
    }
  }

  function checkPasswordVisibility(e) {
    setUserData({ ...userData, email: e.target.value });
    if (e.target.value !== "") {
      setPassWordVisible(true);
    } else {
      setPassWordVisible(false);
    }
  }

  async function handleLogOut() {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  // Copied to clipboard animation
  const handlePassword = () => {
    setCopy(true);
    setTimeout(function () {
      setCopy(false);
    }, 3000);
  };

  return (
    <div>
      <Helmet>
        <title>Account · Rocketstart</title>
      </Helmet>
      <Navbar2 />
      <div className="account">
        <h1 className="account__profile-header">Your Profile</h1>

        <div className="account__fields-container">
          <div className="account__fields">
            <h2 className="account__field-title">Email:</h2>
            <p className={`account__fields-paragraph ${fieldsState}`}>
              {user.email}
            </p>
            <form
              className={`account__fields ${
                fieldsButtonState ? " fields" : "fields__none"
              }`}
            >
              <input
                className="account__input"
                required
                placeholder="New Email"
                autoComplete="email"
                name="email"
                autoFocus
                enterKeyHint="next"
                onChange={(e) => checkPasswordVisibility(e)}
              />
              <input
                className={`account__input ${
                  passwordVisible ? " fields" : "fields__none"
                }`}
                required
                type="password"
                autoComplete="new-password"
                placeholder="Password required"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </form>
          </div>

          <div className="account__fields">
            <h2 className="account__field-title">Password:</h2>
            <p className={`account__fields-paragraph ${fieldsState}`}>
              •••••••
            </p>
            <form onSubmit={(e) => resetPass(e)}>
              <button
                className={`account__button account__password-width ${
                  fieldsButtonState ? " fields" : "fields__none"
                }`}
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <div
              className={`copied__container ${copy ? " fade__in" : ""}`}
              style={{ gap: ".5rem" }}
            >
              <p className="account__fields-paragraph ">Reset Email Sent </p>
              <span className="material-icons copied__check">done</span>
            </div>
          </div>

          {error && <ErrorBox message={errorMessage} justify={false} />}
        </div>

        <div className="account__buttons-container">
          <button className="account__button" onClick={(e) => handleEdit(e)}>
            {buttonState}
          </button>
          <div
            className={`account__buttons-container ${
              fieldsButtonState ? " fields__none" : "fields"
            }`}
          >
            <button className="account__button" onClick={handleLogOut}>
              Sign Out
            </button>
          </div>
          <button
            className={`account__button ${
              fieldsButtonState ? " fields" : "fields__none"
            }`}
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
