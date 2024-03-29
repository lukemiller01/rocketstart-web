import React from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar2.css";
import RocketstartLogo from "../../assets/rocketstartLogo.svg";
import { Account } from "../../modals";
import { useUserAuth } from "../../context/AuthProvider";

// Menu items + function to log user out on button click.
const Menu = () => {
  const navigate = useNavigate();
  const { logOut } = useUserAuth();

  async function handleLogOut() {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      // console.log(e);
    }
  }

  return (
    <>
      <h3>
        <Link to="/contact">Contact</Link>
      </h3>
      <h3>
        <Link to="/message">Message</Link>
      </h3>
      <h3>
        <Link to="/account">Account</Link>
      </h3>
      <h3>
        <Link to="/home" className="navbar__item-focused">Home</Link>
      </h3>
      <h3 onClick={handleLogOut} aria-label="logout">Log Out</h3>
    </>
  );
};

// Navbar 2 is the navigation bar shown to logged-in users
const Navbar2 = () => {
  const [modalOpen, setModalOpen] = useState(false); // Is the "Account" modal open?
  // When the modal is open, if a user clicks out of the modal, it should disappear
  // communicateState shares to the modal whether a user has clicked outside the modal
  const [communicateState, setCommunicateState] = useState(true);

  // If the icon arrow is pointing up or down
  const [accountIconState, setAccountIconState] = useState("expand_more");
  let icon = accountIconState ? "expand_more" : "expand_less";

  function handleModalOpen() {
    setModalOpen(!modalOpen);
    setAccountIconState(!accountIconState);
  }

  // Location for active element only on /account:
  const location = useLocation();
  const { pathname } = location;
  const split = pathname.split("/");

  // For collapsed menu navbar media query
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container" aria-label="navbar-container">
      <div className="inner__navbar2">
        <div className="navbar__logo">
          <Link to="/" className="navbar__logo">
            <img src={RocketstartLogo} alt="logo" className="image__logo"></img>
          </Link>
          <h2>Rocketstart</h2>
        </div>
        <nav>
          <ul className="menu__nav-two">
            <li className="menu__item navbar__item-focused">
              <h3>
                <NavLink
                  aria-label="message"
                  to="/message"
                  className={({ isActive }) => (isActive ? "active__menu" : "")}
                  style={{ display: "flex" }}
                >
                  <h3>Message</h3>
                  <span className="material-symbols-outlined navbar__account-icon_two">
                    edit_square
                  </span>
                </NavLink>
              </h3>
            </li>

            <li className="menu__item navbar__item-focused">
              <h3>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active__menu" : "")}
                  style={{ display: "flex" }}
                >
                  <h3>Contact</h3>
                  <span className="material-symbols-outlined navbar__account-icon_two">
                    contact_mail
                  </span>
                </NavLink>
              </h3>
            </li>

            <li
              className="navbar__item-focused"
              onClick={handleModalOpen}
              onMouseEnter={() => {
                setCommunicateState(false);
              }}
              onMouseLeave={() => {
                setCommunicateState(true);
              }}
            >
              <NavLink
                className={split[1] === "account" ? "active__menu" : ""}
                style={{ display: "flex" }}
                aria-label="account"
              >
                <h3>Account</h3>
                <span className="material-symbols-outlined navbar__account-icon">
                  {icon}
                </span>
              </NavLink>
            </li>
          </ul>

          <div className="collapsed__menu-nav_two">
            {toggleMenu ? (
              <span
                aria-label="menu-close"
                className="material-symbols-outlined collapsed__menu-icons"
                onClick={() => setToggleMenu(false)}
              >
                close
              </span>
            ) : (
              <span
                aria-label="menu-open"
                className="material-symbols-outlined collapsed__menu-icons"
                onClick={() => setToggleMenu(true)}
              >
                menu
              </span>
            )}
            {toggleMenu && (
              <div className="collapsed__menu-container scale-up-center">
                <div className="navbar__inner-menu">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      {modalOpen && (
        <Account
          setModalOpen={setModalOpen}
          setAccountIconState={setAccountIconState}
          communicateState={communicateState}
        />
      )}
    </div>
  );
};

export default Navbar2;
