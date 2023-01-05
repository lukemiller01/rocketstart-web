import { useState, useEffect, createContext, useContext } from 'react';
import auth from "../firebase";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

export const AuthContext = createContext()

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState();
  
    function register(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged( (currentuser) => {
        console.log("Auth", currentuser);
        setUser(currentuser);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ user, register}}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  export function useUserAuth() {
    return useContext(AuthContext);
  }