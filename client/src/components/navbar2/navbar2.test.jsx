import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Navbar2 } from "..";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import { AuthContext } from "../../context/AuthProvider";

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// Mocking Auth functions:
const logOut = jest.fn();

// useNavigate Mock
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not.
}));

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
const store = configureStore({ reducer: reducers, middleware: [thunk] });

// User with unverified email:
const user2 = {
  email: "test@rocketstart.careers",
  emailVerified: false,
};

describe("Navbar 2", () => {
  // Reset the useNavigate mock so a call from an earlier test isn't counted in a later test
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });

  it("Renders Navbar", () => {
    render(
      <BrowserRouter>
        <Navbar2 />
      </BrowserRouter>
    );
  });

  it("Opens and closes Account modal", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user2, logOut: logOut }}>
            <Navbar2 />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    // Open account modal
    fireEvent.click(screen.getByLabelText("account"));

    // Ensure the menu is open
    screen.getByLabelText("logout");
  });

  it("Logs out through Account modal", () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user2, logOut: logOut }}>
            <Navbar2 />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    fireEvent.click(screen.getByLabelText("account"));
    fireEvent.click(screen.getByLabelText("logout"));
  });

  it("Logs out through collapsed menu", async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user2, logOut: logOut }}>
            <Navbar2 />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );

    // Open collapsed menu
    fireEvent.click(screen.getByLabelText("menu-open"));

    // Close collapsed menu
    fireEvent.click(screen.getByLabelText("menu-close"));

    // Open collapsed menu
    fireEvent.click(screen.getByLabelText("menu-open"));

    // Logout
    fireEvent.click(screen.getByLabelText("logout"));

    await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalledTimes(1));
  });
});
