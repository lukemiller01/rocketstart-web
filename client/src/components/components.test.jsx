import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { AuthContext } from "../context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { CallToAction, Footer, Header, PrivacyPolicy, Process, Questions, TermsConditions } from "../containers";

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// User with verified email:
const user1 = {
  email: "test@rocketstart.careers",
  emailVerified: true,
};

describe("Components", () => {
  it("Renders Call to Action Button", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <CallToAction/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getByLabelText("get-started");
    fireEvent.click(button);
  });

  it("Renders Footer", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Footer/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getByLabelText("contact-us");
    fireEvent.click(button);
  });

  it("Renders Header Button", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Header/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getByLabelText("get-started");
    fireEvent.click(button);
  });

  it("Renders Privacy Policy", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <PrivacyPolicy/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // const { getByText } = within(screen.getByLabelText('summary'))
    expect(screen.getByLabelText('summary')).toHaveTextContent('describes how your personal information is collected, used, and shared')
  });

  it("Renders Terms & Conditions", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <TermsConditions/>
        </AuthContext.Provider>
      </BrowserRouter>
    );
    
    expect(screen.getByLabelText('summary')).toHaveTextContent('This website is operated by Rocketstart.');
  });

  it("Renders Process Container", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Process/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getAllByLabelText("explore")[0];
    fireEvent.click(button);
  });

  it("Renders Question Container", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Questions/>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getAllByLabelText("expand-question")[0];
    fireEvent.click(button);
  });
});