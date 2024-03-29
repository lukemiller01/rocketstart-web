import React, { useEffect } from "react";
import { createUser, resetPassword } from "../../actions/userActions";
import { ErrorBox } from "../../components";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

import "./signUp.css";

const SignUp = ({
  setModalOpen,
  buttonText,
  setButtonState,
  question,
  answer,
  setBottomTextQState,
  setBottomTextAState,
  terms,
  setTermsTextState,
  reset,
  setResetTextState,
  password,
  setPasswordState,
  name,
  setNameState,
  emailFocus,
  nameFocus,
  checkmark,
  setCheckState,
  background,
  closeButton,
  setHeaderState,
  containerStyle,
}) => {
  // Set Firebase auth and send user data MongoDB
  const navigate = useNavigate();
  // Keeps track of user input
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Checks if the password is required for the form to be submitted
  const [passwordRequired, setPasswordRequired] = useState(true);
  // Check if the name is required for the form to be submitted
  const [nameRequired, setNameRequired] = useState(false);

  // User opt in to product broadcast
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const { register, logIn, checkEmail } = useUserAuth();

  // Refs for focus element:
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (name === "" && buttonText !== "Reset Password") {
      nameRef.current.focus(); // Because element unfocuses on handleModalSwitch
    } else {
      emailRef.current.focus(); // Because element unfocuses on handleModalSwitch
    }
  }, [name, buttonText]);

  // Handle modal close
  function modalClose() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  // Error handling
  const [errorMessage, setErrorMessage] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (buttonText === "Sign In") {
      // Sign in logic
      e.preventDefault();

      // TODO: add network request failed
      try {
        await logIn(userData.email.trim(), userData.password);
        document.body.style.overflow = "auto";
        navigate("/message");
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect password.");
        } else if (error.code === "auth/too-many-requests") {
          setErrorMessage("Too many attempts. Please try in a few minutes.");
        } else if (error.code === "auth/invalid-email") {
          setErrorMessage("The email you entered is invalid.");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("No account exists with this email.");
        } else {
          setErrorMessage("Error. Please try again.");
        }
      }
    } else if (buttonText === "Create Account") {
      // Sign up logic
      e.preventDefault();

      // window.umami.trackEvent("Sign Up");
      try {
        await register(userData.email.trim(), userData.password);
        dispatch(
          createUser({
            email: userData.email.trim(),
            name: userData.name.trim(),
            broadcast: checked,
          })
        );
        document.body.style.overflow = "auto";
        navigate("/message");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("An account with this email already exists.");
        } else if (error.code === "auth/internal-error") {
          setErrorMessage("An internal error occured. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          setErrorMessage("The email you entered is invalid.");
        } else if (error.code === "auth/too-many-requests") {
          setErrorMessage("Too many attempts. Please try in a few minutes.");
        } else if (error.code === "auth/weak-password") {
          setErrorMessage("Your password must be at least 6 characters.");
        } else {
          setErrorMessage("Error. Please try again.");
        }
      }
    } else if (buttonText === "Reset Password") {
      // Reset password logic
      e.preventDefault();

      try {
        var result = await checkEmail(userData.email.trim());
        if (result && result.length === 0) {
          const error = new Error();
          error.code = "auth/user-not-found";
          throw error;
        }
        dispatch(resetPassword({ email: userData.email.trim() }));
        setButtonState("Sign In");
        setBottomTextQState("No Account?");
        setBottomTextAState("Create One");
        setTermsTextState(false);
        setResetTextState(false);
        setPasswordState(true);
        if (containerStyle === "signup__login") {
          setHeaderState("Welcome back!");
        }
      } catch (error) {
        if (error.code === "auth/too-many-requests") {
          setErrorMessage("Too many attempts. Please try in a few minutes.");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("No account exists with this email.");
        } else if (error.code === "auth/internal-error") {
          setErrorMessage("An internal error occured. Please try again.");
        } else if (error.code === "auth/weak-password") {
          setErrorMessage("Your password must be at least 6 characters.");
        } else {
          setErrorMessage("Error. Please try again.");
        }
      }
    }
  }

  // To handle the modal change between Sign Up and Sign In
  function handleModalSwitch(type) {
    if (type && buttonText === "Sign In") {
      setButtonState("Create Account");
      setBottomTextQState("Have An Account?");
      setBottomTextAState("Sign In");
      setTermsTextState(true);
      setResetTextState(true);
      setPasswordState(true);
      setNameState(true);
      if (containerStyle === "signup__login") {
        setHeaderState("Create a Free Account");
      }
      setPasswordRequired(true);
      setNameRequired(true);
      setCheckState(true);
    } else if (
      (type && buttonText === "Create Account") ||
      (type && buttonText === "Reset Password")
    ) {
      setButtonState("Sign In");
      setBottomTextQState("No Account?");
      setBottomTextAState("Create One");
      setTermsTextState(false);
      setResetTextState(false);
      setPasswordState(true);
      setNameState(false);
      if (containerStyle === "signup__login") {
        setHeaderState("Welcome back!");
      }
      setPasswordRequired(true);
      setNameRequired(false);
      setCheckState(false);
    } else {
      setButtonState("Reset Password");
      setBottomTextQState(false);
      setBottomTextAState("Cancel");
      setResetTextState(true);
      setPasswordState(false);
      setNameState(false);
      if (containerStyle === "signup__login") {
        setHeaderState("Reset Password");
      }
      setPasswordRequired(false);
      setNameRequired(false);
      setCheckState(false);
    }
  }

  // User opt-in for product updates
  function handleCheckChange() {
    setChecked(!checked);
  }

  return (
    <div>
      <div className={`${background}`}>
        <div className={`${containerStyle}`}>
          <span
            className={`material-icons exit__button ${closeButton}`}
            onClick={modalClose}
          >
            close
          </span>
          <div className="signup__content">
            <form className="signup__fields" onSubmit={handleFormSubmit} aria-label="signup-signin">
              <input
                className={`signup__input ${name}`}
                required={nameRequired}
                type="name"
                autoComplete="name"
                placeholder="First name"
                enterKeyHint="next"
                autoFocus={nameFocus}
                ref={nameRef}
                aria-label="name"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                className="signup__input"
                required
                placeholder="Email"
                autoComplete="email"
                name="email"
                enterKeyHint="next"
                autoFocus={emailFocus}
                ref={emailRef}
                aria-label="email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <input
                className={`signup__input ${password}`}
                required={passwordRequired}
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                enterKeyHint="next"
                aria-label="password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <label
                className={`signup__product-update_container ${checkmark}`}
                enterKeyHint="next"
              >
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckChange();
                  }}
                  className="signup__product-update-checkbox"
                  aria-label="product-updates-checkbox"
                />
                <p className="signup__product-update_text">
                  Notify me about new features
                </p>
              </label>
              {/*disabled={loading}> */}
              <button type="submit" className="signup__button" aria-label="action-button">
                {buttonText}
              </button>
            </form>
            <p className={`signup__terms ${terms}`}>
              By signing up for Rocketstart you accept our&nbsp;
              <Link to="/terms" className="signup__terms-links">
                Terms of Service&nbsp;
              </Link>
              and our&nbsp;
              <Link to="/privacy" className="signup__terms-links">
                Privacy Policy.
              </Link>
            </p>
            <p
              className={`signup__reset signup__terms-links ${reset}`}
              onClick={() => {
                handleModalSwitch(false);
              }}
              aria-label="reset-pass-text"
            >
              Reset Password
            </p>
            <div className="signup__question-answer">
              <p className="signup__signin">{question}&nbsp;</p>
              <div
                onClick={() => {
                  handleModalSwitch(true);
                }}
              >
                <p className="signup__signin signup__terms-links" aria-label="question">{answer}</p>
              </div>
            </div>
            {/* {<ErrorBox message={errorMessage} justify={true} />} */}
            {errorMessage !== "" && <ErrorBox message={errorMessage} justify={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;