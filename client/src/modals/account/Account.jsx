import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './account.css';
import useOutsideClick from './useOutsideClick';

const Account = ({setModalOpen}) => {

    const ref = useRef();

    useOutsideClick(ref, () => {
        setModalOpen(false);
      });

  return (
    <div className='account__modal' ref={ref}>

        <p className='account__modal-header'>Monthly Usage:</p>
        <div className='account__modal-search_container'>
            <p className='account__modal-text'>Searches</p>
            <p className='account__modal-text'>2/3</p>
        </div>

        <div className='account__searches-bar'>
            <div className='account__searches-bg'></div>
        </div>

        <p className='account__modal-text account__quota-text'>Monthly quota resets in 10 days.</p>

        <div className='account__button-container'>
            <Link to='/profile'>
                    <button className='upgrade__button'>Upgrade</button>
            </Link>
        </div>

        <div className='account__nav-container'>
            <div className='account__nav-options'>
                <span className="material-icons account__icons">account_circle</span>
                <p className='account__modal-text_nav'>Account</p>
            </div>
            <div className='account__nav-options'>
                <span className="material-icons account__icons">home</span>
                <p className='account__modal-text_nav'>Home Page</p>
            </div>
            <div className='account__nav-options'>
                <span className="material-icons account__icons">logout</span>
                 <p className='account__modal-text_nav'>Log Out</p>
            </div>
        </div>

    </div>
  )
}

export default Account