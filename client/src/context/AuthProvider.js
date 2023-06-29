import React, { useState, useEffect, createContext, useContext } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

export const AuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(); // State for a specific user

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function changeEmail(newEmail) {
    return updateEmail(auth.currentUser, newEmail);
  }

  function checkEmail(email) {
    var result = fetchSignInMethodsForEmail(auth, email);
    return result;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, register, logIn, logOut, changeEmail, checkEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
