import React from "react";
import { BrowserRouter } from "react-router-dom";
import Verification from "./Verification";
import { render, fireEvent, screen } from "@testing-library/react";
import { AuthContext } from "../../context/AuthProvider";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../../reducers";

// User with verified email:
const user1 = {
  email: "test@rocketstart.careers",
  emailVerified: true,
};

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
const store = configureStore({ reducer: reducers, middleware: [thunk] });

// Mocking Auth Functions
const changeEmail = jest.fn();

describe("Verification", () => {
  it("Renders page & handles user input", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1 }}>
            <Verification />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    fireEvent.change(screen.getByLabelText("email-input"), {
        target: { value: "x@rocketstart.careers" },
    });

    expect(screen.getByLabelText("email-input").value).toBe("x@rocketstart.careers");
  });

  it("Resend email works", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user1, changeEmail: changeEmail }}>
            <Verification />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    fireEvent.change(screen.getByLabelText("email-input"), {
        target: { value: "x@rocketstart.careers" },
    });

    fireEvent.click(screen.getByLabelText('action')); // Resend button works
  });
});
