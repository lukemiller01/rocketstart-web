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

import * as router from 'react-router'

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// User with verified email:
const user1 = {
  email: "test@rocketstart.careers",
  emailVerified: true,
};

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
const store = configureStore({ reducer: reducers, middleware: [thunk] });

describe("Signup", () => {
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

  jest.mock('react-router-dom', () => {
    return {
      Navigate: jest.fn(({ to }) => `navigate to ${to}`),
    };
  });
});
