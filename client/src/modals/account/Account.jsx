import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./account.css";
import useOutsideClick from "./useOutsideClick";
import { useUserAuth } from "../../context/AuthProvider";

const Account = ({ setModalOpen, setAccountIconState, communicateState }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const { logOut } = useUserAuth();

  useOutsideClick(ref, () => {
    if (communicateState) {
      setModalOpen(false);
      setAccountIconState(true);
    }
  });

  async function handleLogOut() {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="account__bg">
      <div className="account__modal" ref={ref}>
        <div className="account__nav-container">
          <Link className="account__nav-options" to="/account">
            <span className="material-icons account__icons">
              account_circle
            </span>
            <p className="account__modal-text_nav">Account</p>
          </Link>

          <Link to="/home" className="account__nav-options">
            <span className="material-icons account__icons">home</span>
            <p className="account__modal-text_nav">Home Page</p>
          </Link>
          <div className="account__nav-options" onClick={handleLogOut}>
            <span className="material-icons account__icons">logout</span>
            <p className="account__modal-text_nav">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
