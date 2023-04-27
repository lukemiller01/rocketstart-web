import React from "react";
import { useState, useEffect } from "react";
import { SignUp } from "../../modals";
import { Navbar3 } from "../../components";
import { Helmet } from "react-helmet";
import "./login.css";

const Login = () => {
  useEffect(() => {
    // window.umami.trackView("/login");
  }, []);

  // Parameters needed for the SignUp component:
  let modalOpen = true;
  const [buttonState, setButtonState] = useState("Create Account");
  const [bottomTextQState, setBottomTextQState] = useState("Have An Account?");
  const [bottomTextAState, setBottomTextAState] = useState("Sign In");
  const [termsTextState, setTermsTextState] = useState(true);
  const [resetTextState, setResetTextState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);
  const [nameState, setNameState] = useState(true);
  const [checkState, setCheckState] = useState(true);
  let terms = termsTextState ? "" : "signup__no-visibility";
  let reset = resetTextState ? "signup__no-visibility" : "";
  let password = passwordState ? "" : "signup__no-visibility";
  let name = nameState ? "" : "signup__no-visibility";
  let checkmark = checkState
    ? "signup__visibility__flex"
    : "signup__no-visibility";

  // Components needed for the rest of the page:
  const [headerState, setHeaderState] = useState("Create a Free Account");

  return (
    <div>
      <Helmet>
        <title>Log In · Rocketstart</title>
      </Helmet>
      <Navbar3 />
      <div className="login">
        <h1 className="login__header">{headerState}</h1>
        <SignUp
          setModalOpen={modalOpen} // To open and close the modal with the close button
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
          emailFocus={true} // To set if the email is focused or not
          nameFocus={false} // To set if the name is focused or not
          checkmark={checkmark} // Access to the checkmark
          setCheckState={setCheckState} // To set the checkmark visibility
          background={"login__bg"} // To remove the absolute positioning
          closeButton={"close__none"} // To remove the close button
          setHeaderState={setHeaderState} // To set the header
          containerStyle={"signup__login"}
        />
      </div>
    </div>
  );
};

export default Login;
