import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import RocketstartLogo from "../../assets/rocketstartLogo.svg";
import { useState } from "react";
import { SignUp } from "../../modals";

// Navbar items
const Menu = () => (
  <>
    <h3>
      <Link to="/">Home</Link>
    </h3>
    <h3>
      <Link to="/product">Product</Link>
    </h3>
    <h3>
      <Link to="/blog" className="navbar__item-focused">Blog</Link>
    </h3>
    <h3>
      <Link to="/about">About</Link>
    </h3>
  </>
);

const Navbar = ({ navOne, logoURL }) => {
  const [modalOpen, setModalOpen] = useState(false); // Is the signup modal open or closed?
  const [buttonState, setButtonState] = useState(""); // What text should the modal button display?
  const [bottomTextQState, setBottomTextQState] = useState(""); // What text should the question display?
  const [bottomTextAState, setBottomTextAState] = useState(""); // What text should the call to action display?
  const [termsTextState, setTermsTextState] = useState(""); // Should the terms and conditions be shown in the modal?
  const [resetTextState, setResetTextState] = useState(""); // Should the reset password link be shown in the modal?
  const [passwordState, setPasswordState] = useState(true); // Should the user need to input their password on this form?
  const [nameState, setNameState] = useState(true); // Should the user need to input their name on this form?
  const [emailFocus, setEmailFocus] = useState(true); // Is the email input focused?
  const [nameFocus, setNameFocus] = useState(false); // Is the name input focused?
  const [checkState, setCheckState] = useState(true); // Should the "new features" checkmark state be included?

  function handleUserLogin(type) {
    // Opening the modal:
    document.body.style.overflow = "hidden";
    setModalOpen(true);
    if (type) {
      // The user clicked "Sign Up"
      setButtonState("Create Account");
      setBottomTextQState("Have An Account?");
      setBottomTextAState("Sign In");
      setTermsTextState(true);
      setResetTextState(true);
      setNameState(true);
      setEmailFocus(false);
      setNameFocus(true);
      setCheckState(true);
      // window.umami.trackEvent("Navbar Button");
    } else {
      // The user clicked "Sign In"
      setButtonState("Sign In");
      setBottomTextQState("No Account?");
      setBottomTextAState("Create One");
      setTermsTextState(false);
      setResetTextState(false);
      setNameState(false);
      setEmailFocus(true);
      setNameFocus(false);
      setCheckState(false);
    }
  }

  // Class names for if the element shjould be visible:
  let terms = termsTextState ? "" : "signup__no-visibility";
  let reset = resetTextState ? "signup__no-visibility" : "";
  let password = passwordState ? "" : "signup__no-visibility";
  let name = nameState ? "" : "signup__no-visibility";
  let checkmark = checkState
    ? "signup__visibility__flex"
    : "signup__no-visibility";

  // For collapsed menu navbar media query
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container">
      <div className="inner__navbar">
        <div className="navbar__logo">
          <Link to={logoURL} className="navbar__logo">
            <img
              src={RocketstartLogo}
              alt="Rocketstart logo"
              className="image__logo"
            ></img>
          </Link>
          <h2>Rocketstart</h2>
          <ul className="menu">
            <li className="menu__item">
              <h3>
                <Link to="/product" className="navbar__item-focused">
                  Product
                </Link>
              </h3>
            </li>
            <li className="menu__item">
              <h3>
                <Link to="/blog" className="navbar__item-focused">
                  Blog
                </Link>
              </h3>
            </li>
            <li className="menu__item navbar__item-focused">
              <h3>
                <Link to="/about" className="navbar__item-focused">
                  About
                </Link>
              </h3>
            </li>
          </ul>
        </div>

        <div className="navbar__right">
          <div className="navbar__buttons-not_collapsed">
            {navOne === "" ? (
              <div>
                <nav className="navbar__items">
                  <h3
                    className="navbar__item-focused"
                    onClick={() => {
                      handleUserLogin(false);
                    }}
                  >
                    Sign In
                  </h3>

                  <div className="button__container">
                    <button
                      className="navbar__button"
                      onClick={() => {
                        handleUserLogin(true);
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </nav>
              </div>
            ) : (
              <div>
                <div className="button__container">
                  <Link to="/message">
                    <button className="navbar__button home__dashboard-button">
                      Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="collapsed__menu">
            {toggleMenu ? (
              <span
                className="material-symbols-outlined collapsed__menu-icons"
                onClick={() => setToggleMenu(false)}
              >
                close
              </span>
            ) : (
              <span
                className="material-symbols-outlined collapsed__menu-icons"
                onClick={() => setToggleMenu(true)}
              >
                menu
              </span>
            )}
            {toggleMenu && (
              <div className="collapsed__menu-container scale-up-center">
                <div className="navbar__inner-menu">
                  <Menu />
                  <div className="navbar__inner-menu_signup">
                    {navOne === "" ? (
                      <div className="navbar__inner-menu_signup">
                        <h3
                          className="navbar__item-focused"
                          onClick={() => {
                            handleUserLogin(false);
                          }}
                        >
                          Sign In
                        </h3>
                        <div className="button__container">
                          <button
                            className="navbar__button"
                            onClick={() => {
                              handleUserLogin(true);
                            }}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="button__container">
                          <Link to="/message">
                            <button className="navbar__button home__dashboard-button">
                              Dashboard
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* If the user clicked sign up, add the SignUp modal to the screen  */}
      {modalOpen && (
        <SignUp
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
          name={name} // Access to the name buton
          setNameState={setNameState} // To set the name button
          emailFocus={emailFocus} // To set if the email is focused or not
          nameFocus={nameFocus} // To set if the name is focused or not
          checkmark={checkmark} // Access to the checkmark
          setCheckState={setCheckState} // To set the checkmark visibility
          background={"signup__bg"} // To keep the absolute positioning
          closeButton={"close__show"} // To keep the close button
          containerStyle={"signup"} // Is the item a modal or a full screen?
        />
      )}
    </div>
  );
};

export default Navbar;
