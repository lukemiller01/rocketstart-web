import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";
import { AuthContext } from "../../context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import { act } from "react-dom/test-utils";

// Mocking Firebase functions from the Firebase configuration file.
jest.mock("firebase/app");
jest.mock("firebase/auth");

// User with verified email:
const user1 = {
  email: "test@rocketstart.careers",
  emailVerified: true,
};

// User with unverified email:
const user2 = {
  email: "test@rocketstart.careers",
  emailVerified: false,
};

describe("Message", () => {
  it("Renders page with verified user", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Message />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  });

  const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
  );

  it("Renders page with unverified user", () => {
    const store = configureStore({ reducer: reducers, middleware: [thunk] });
    render(
      <ReduxProvider reduxStore={store}>
        <BrowserRouter>
          <AuthContext.Provider value={{ user: user2 }}>
            <Message />
          </AuthContext.Provider>
        </BrowserRouter>
      </ReduxProvider>
    );
  });

  it("Updates on text input", () => {
    // Message
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Message />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("textbox"), {
      target: { value: "testing" },
    });
    expect(screen.getByLabelText("textbox").value).toBe("testing");
  });

  test("Updates insights after 1.5s", () => {
    jest.useFakeTimers();
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Message />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // Changes value
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "to be??\n\nnew test?\n\nnew test.\n\nto be.\n\nto have.\n\nthere is. was. ",
      },
    });

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Paragraphs").textContent).toEqual("6");
    expect(screen.getByLabelText("Questions").textContent).toEqual("2");
    expect(screen.getByLabelText("Grade").textContent).toEqual("2");
    expect(screen.getByLabelText("Wording").textContent).toEqual("4");
  });

  // Mocking navigator with write to clipboard function
  const writeText = jest.fn();
  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });

  test("Copies to clipboard when clicked", async () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Message />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    
    // Adding text to box
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value: "test",
      },
    });
    
    // Clicking the button
    const button = screen.getByLabelText("copy-button");
    userEvent.click(button);

    // Checking to see if the correct text was copied to clipboard
    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('test');
  });

  test("Grades Switch Statements Correctly", async () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user1 }}>
          <Message />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    
    // 12
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("12");

    // 11
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "testing new testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("11");

    // 10
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "testing new new testing testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("10");

    // 9
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("9");

    // 8
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new testing testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("8");

    // 7
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("7");

    // 6
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new new testing testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("6");

    // 5
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("5");

    // 4
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new new new testing.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("4");

    // 3
    fireEvent.change(screen.getByLabelText("textbox"), {
      target: {
        value:
          "new new new.",
      },
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText("Grade").textContent).toEqual("3");
  });
});
