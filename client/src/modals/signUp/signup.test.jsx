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

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// Mocking Auth functions:
const register = jest.fn();
const login = jest.fn();
const checkEmail = jest.fn();

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
            <SignUp buttonText={"Sign In"}/>
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

    await waitFor(() => expect(mockedUseDispatch).toHaveBeenCalledTimes(1));
  });

  it("Renders Container Style 1 (Reset Password)", async () => {

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
});
