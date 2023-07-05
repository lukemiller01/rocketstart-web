import React from "react";
import SignUp from "./SignUp";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthContext } from "../../context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import { FirebaseError } from "firebase/app";

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// Mocking Auth functions:
const register = jest.fn();
const login = jest.fn();
const checkEmail = jest.fn();

// Mocking auth function errors:
const incorrectPassword = jest.fn().mockRejectedValue({code: "auth/wrong-password"});
const tooManyRequests = jest.fn().mockRejectedValue({code: "auth/too-many-requests"});
const invalidEmail = jest.fn().mockRejectedValue({code: "auth/invalid-email"});
const userNotFound = jest.fn().mockRejectedValue({code: "auth/user-not-found"});
const unknownError = jest.fn().mockRejectedValue(new FirebaseError("auth/wrong-password"));

const emailInUse = jest.fn().mockRejectedValue({code: "auth/email-already-in-use"});
const internalError = jest.fn().mockRejectedValue({code: "auth/internal-error"});
const tooManyAttempts = jest.fn().mockRejectedValue({code: "auth/too-many-requests"});
const weakPassword = jest.fn().mockRejectedValue({code: "auth/weak-password"});


// User with verified email:
const user1 = {
  email: "test@rocketstart.careers",
  emailVerified: true,
};

// Redux Provider & Store
const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
const store = configureStore({ reducer: reducers, middleware: [thunk] });

// useNavigate Mock
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not.
}));

// useDispatch Mock
const mockedUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUseDispatch, // Return an empty jest function to test whether it was called or not.
}));

describe("Signup", () => {
  // Reset the useNavigate mock so a call from an earlier test isn't counted in a later test
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });

  it("Renders page", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1 }}>
            <SignUp />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );
  });

  // Mocked functions (owned by Navbar component):
  const setButtonState = jest.fn();
  const setBottomTextQState = jest.fn();
  const setBottomTextAState = jest.fn();
  const setTermsTextState = jest.fn();
  const setResetTextState = jest.fn();
  const setEmailFocus = jest.fn();
  const setNameFocus = jest.fn();
  const setPasswordState = jest.fn();
  const setNameState = jest.fn();
  const setCheckState = jest.fn();
  const setHeaderState = jest.fn();

  it("Removes focus from name when 'Reset Password' is clicked", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1 }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("reset-pass-text");
    userEvent.click(button);
  });

  it("Navigates and activates checkmark.", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1 }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("question");
    userEvent.click(button);

    const button2 = screen.getByLabelText("product-updates-checkbox");
    userEvent.click(button2);
  });

  it("Inputs email, name, password", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1 }}>
            <SignUp />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "x@rocketstart.careers" },
    });
    expect(screen.getByLabelText("email").value).toBe("x@rocketstart.careers");

    fireEvent.change(screen.getByLabelText("name"), {
      target: { value: "x" },
    });
    expect(screen.getByLabelText("name").value).toBe("x");

    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123" },
    });
    expect(screen.getByLabelText("password").value).toBe("123");
  });

  it("Handles Sign In form submit", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: login }}>
            <SignUp buttonText={"Sign In"} />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "x@rocketstart.careers" },
    });

    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123" },
    });

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalledTimes(1));
  });

  it("Handles Sign Up form submit", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: register }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              buttonText={"Create Account"}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const signUpButton = screen.getByLabelText("question");
    userEvent.click(signUpButton);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "x@rocketstart.careers" },
    });

    fireEvent.change(screen.getByLabelText("name"), {
      target: { value: "x" },
    });

    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123" },
    });

    const actionButton = screen.getByLabelText("action-button");
    fireEvent.click(actionButton);

    await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalledTimes(1));
  });

  it("Handles Reset Password form submit", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: checkEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              buttonText={"Reset Password"}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const signUpButton = screen.getByLabelText("question");
    userEvent.click(signUpButton);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "x@rocketstart.careers" },
    });

    const actionButton = screen.getByLabelText("action-button");
    fireEvent.click(actionButton);

    // await waitFor(() => expect(checkEmail).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockedUseDispatch).toHaveBeenCalledTimes(1));
  });

  it("Renders Container Style 1 (Reset Password)", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: checkEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("reset-pass-text");
    userEvent.click(button);
  });

  it("Renders Container Style 2 (Sign Up)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: checkEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("question");
    userEvent.click(button);
  });

  it("Renders Container Style 3 (Welcome back!)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: checkEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("question");
    userEvent.click(button);
  });

  it("Shows incorrect password error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: incorrectPassword }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Incorrect password.")).textContent);
  });

  it("Shows too many requests error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: tooManyRequests }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Too many attempts. Please try in a few minutes.")).textContent);
  });

  it("Shows invalid email error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: invalidEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("The email you entered is invalid.")).textContent);
  });

  it("Shows user not found error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: userNotFound }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("No account exists with this email.")).textContent);
  });

  it("Shows unknown error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, logIn: unknownError }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Sign In"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Error. Please try again.")).textContent);
  });

  it("Shows email already in use error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: emailInUse }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("An account with this email already exists.")).textContent);
  });

  it("Shows internal error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: internalError }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("An internal error occured. Please try again.")).textContent);
  });

  it("Shows invalid email error (sign up)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: invalidEmail }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("The email you entered is invalid.")).textContent);
  });

  it("Shows too many attempts error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: tooManyAttempts }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Too many attempts. Please try in a few minutes.")).textContent);
  });

  it("Shows weak password error", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: weakPassword }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Your password must be at least 6 characters.")).textContent);
  });

  it("Shows unknown error (sign up)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, register: unknownError }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Create Account"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Error. Please try again.")).textContent);
  });

  it("Shows weak password error (reset)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: weakPassword }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Reset Password"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Your password must be at least 6 characters.")).textContent);
  });

  it("Shows internal error (reset)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: internalError }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Reset Password"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("An internal error occured. Please try again.")).textContent);
  });

  it("Shows user not found error (reset)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: userNotFound }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Reset Password"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("No account exists with this email.")).textContent);
  });

  it("Shows too many requests error (reset)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: tooManyRequests }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Reset Password"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Too many attempts. Please try in a few minutes.")).textContent);
  });

  it("Shows unknown error (reset)", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, checkEmail: unknownError }}>
            <SignUp
              setButtonState={setButtonState}
              setBottomTextAState={setBottomTextAState}
              setBottomTextQState={setBottomTextQState}
              setTermsTextState={setTermsTextState}
              setResetTextState={setResetTextState}
              setEmailFocus={setEmailFocus}
              setNameFocus={setNameFocus}
              setPasswordState={setPasswordState}
              setNameState={setNameState}
              setCheckState={setCheckState}
              setHeaderState={setHeaderState}
              containerStyle={"signup__login"}
              buttonText={"Reset Password"}
              type={true}
            />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    const button = screen.getByLabelText("action-button");
    fireEvent.click(button);

    return expect((await screen.findByText("Error. Please try again.")).textContent);
  });
});