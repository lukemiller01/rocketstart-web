import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, Link, useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import "./navbar2.css";
import RocketstartLogo from '../../assets/rocketstartLogo.svg';
import { Account } from '../../modals';
import { useUserAuth } from '../../context/AuthProvider';

const Menu = () => {

  const navigate = useNavigate();
  const { logOut } = useUserAuth();

    async function handleLogOut() {
      try {
          await logOut();
          navigate("/");
        }
        catch (e) {
          // console.log(e);
        }
    }

  return (
    <>
      <h3><Link to='/contact'>Contact</Link></h3>
      <h3><Link to='/message'>Message</Link></h3>
      <h3><Link to='/account'>Account</Link></h3>
      <h3><Link to="/home" className='navbar__item-focused'>Home</Link></h3>
      <h3 onClick={handleLogOut}>Log Out</h3>
    </>
  )
}

const Navbar2 = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [communicateState, setCommunicateState] = useState(true);

  const [accountIconState, setAccountIconState ] = useState('expand_more');
  let icon = accountIconState ? 'expand_more' : 'expand_less';

  function handleModalOpen() {
    setModalOpen(!modalOpen);
    setAccountIconState(!accountIconState);
  }

  // Location for active element only on /account:
  const location = useLocation();
  const { pathname } = location;
  const split = pathname.split("/");

  // For collapsed menu navbar media query
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
  <div className='navbar__container'>
    <div className='inner__navbar2'>
      <div className='navbar__logo'>
        <Link to="/" className='navbar__logo'><img src={RocketstartLogo} alt="logo" className='image__logo'></img></Link>
        <h2>Rocketstart</h2>
      </div>
      <nav>
        <ul className='menu__nav-two'>

          <li className='menu__item navbar__item-focused'>
            <h3>
              <NavLink to='/message' className={({ isActive }) => isActive ? 'active__menu' : ''} style={{display: 'flex'}}>
                <h3>Message</h3>
                <span className="material-symbols-outlined navbar__account-icon_two">edit_square</span>
              </NavLink>
            </h3>
          </li>

          <li className='menu__item navbar__item-focused'>
            <h3>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'active__menu' : ''} style={{display: 'flex'}}>
                <h3>Contact</h3>
                <span className="material-symbols-outlined navbar__account-icon_two">contact_mail</span>
              </NavLink>
            </h3>
          </li>

          <li className='navbar__item-focused' onClick={handleModalOpen} onMouseEnter={() => {setCommunicateState(false)}} onMouseLeave={() => {setCommunicateState(true)}} >
              <NavLink className={split[1] === "account" ? "active__menu" : ""} style={{display: 'flex'}}>
                <h3>Account</h3>
                <span className="material-symbols-outlined navbar__account-icon">{icon}</span>
              </NavLink>
          </li>
          
        </ul>

        <div className='collapsed__menu-nav_two'>
          {toggleMenu
            ? <span className="material-symbols-outlined collapsed__menu-icons" onClick={() => setToggleMenu(false)}>close</span>
            : <span className="material-symbols-outlined collapsed__menu-icons" onClick={() => setToggleMenu(true)}>menu</span>
          }
          {toggleMenu && ( 
            <div className="collapsed__menu-container scale-up-center">
              <div className="navbar__inner-menu">
                <Menu/>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
    {modalOpen && <Account setModalOpen={setModalOpen} setAccountIconState={setAccountIconState} communicateState={communicateState}/>}
  </div>
  )
}

export default Navbar2