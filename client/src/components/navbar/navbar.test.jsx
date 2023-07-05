import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Navbar } from "..";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import { AuthContext } from "../../context/AuthProvider";


// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
const store = configureStore({ reducer: reducers, middleware: [thunk] });

// User with unverified email:
const user2 = {
  email: "test@rocketstart.careers",
  emailVerified: false,
};

describe("Navbar", () => {
  it("Renders Navbar", () => {
    render(
      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
    );
  });

  it("Opens modal (sign in)", () => {
    render(
      <ReduxProvider reduxStore={store}>
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user2 }}>
          <Navbar navOne={""}/>
        </AuthContext.Provider>
      </BrowserRouter>
    </ReduxProvider>
    );

    fireEvent.click(screen.getByLabelText('sign-in'));
  });

  it("Opens modal (sign up)", () => {
    render(
      <ReduxProvider reduxStore={store}>
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user2 }}>
          <Navbar navOne={""}/>
        </AuthContext.Provider>
      </BrowserRouter>
    </ReduxProvider>
    );

    fireEvent.click(screen.getByLabelText('sign-up'));
  });

  it("Opens & closes toggle menu", () => {
    render(
      <ReduxProvider reduxStore={store}>
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user2 }}>
          <Navbar navOne={""}/>
        </AuthContext.Provider>
      </BrowserRouter>
    </ReduxProvider>
    );

    fireEvent.click(screen.getByLabelText('open-menu'));
    fireEvent.click(screen.getByLabelText('sign-up-from-menu'));
    fireEvent.click(screen.getByLabelText('sign-in-from-menu'));
    fireEvent.click(screen.getByLabelText('close-menu'));
  });
});
