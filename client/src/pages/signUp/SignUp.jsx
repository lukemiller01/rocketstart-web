import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './signUp.css';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const { currentUser, register } = useAuth();
    const [loading, setLoading] = useState(false);

    // Don't allow users to access registration while they're logged in
    useEffect(() => {
        if (currentUser) {
          navigate("/");
        }
    }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            return alert("Passwords do not match");
        }
      
        try {
            setLoading(true);
            await register(email, password);
            navigate("/message");
        } catch (e) {
            alert("Failed to register");
        }
      
        setLoading(false);
    }

  return (
    <div>
        Sign Up
        <form onSubmit={handleFormSubmit}>
          <div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={loading}>
              Register
            </button>
          </div>
        </form>
    </div>
  )
}

export default SignUp