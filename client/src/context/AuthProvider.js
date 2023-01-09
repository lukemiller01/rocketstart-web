import { useState, useEffect, createContext, useContext } from 'react';
import auth from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
//   import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut
//   } from "firebase/auth";

export const AuthContext = createContext()

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState();

    function register(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
      return signOut(auth);
    }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged( (currentuser) => {
        setUser(currentuser);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ user, register, logIn, logOut}}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  export function useUserAuth() {
    return useContext(AuthContext);
  }