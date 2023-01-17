import React from 'react';
import Navbar2 from '../../components/navbar2/Navbar2';
import LinkedIn from '../../assets/linkedin.png';
import { Helmet } from 'react-helmet';

import './find.css';

const Find = () => {

  window.umami.trackView('/find');

  const handleSearch = () => {
    document.getElementById('find-button').classList.add('button--loading')
    document.getElementById('find-button').textContent = "";
    setTimeout(function () {
      document.getElementById("find-button").classList.remove("button--loading");
      document.getElementById('find-button').textContent = "Find";
      
      document.getElementById('poc__title').style.visibility = "visible";
      document.getElementById('fourth-row').style.visibility = "visible";
    }, 1000);
  };

  return (
    <div>
        <Helmet>
            <title>Find the recruiter for any job application in one click · Rocketstart</title>
        </Helmet>
        <Navbar2/>
        <div className='find'>
          <div className='rows'>
            <div className='row__one'>
              <h5 className='contact__header'>Contact Finder</h5>
            </div>
            <div className='row__two'>
              <h3 className='active__element-temp'>Find by URL</h3>
              <h3>Find by Role</h3>
            </div>
            <div className='row__three'>
              <input className='find__input' placeholder='Job URL'></input>
              <button className='find__button' id='find-button' onClick={handleSearch}>Find</button>
            </div>
            <p id='poc__title' className='find__paragraph-header' style={{visibility: 'hidden'}}>Hiring for this role:</p>
            <div id='fourth-row' className='row__four' style={{visibility: 'hidden'}}>
              <div>
                <div className='find__biography-container'>
                  <h5 className='contact__name'>Luke Miller</h5>
                  <img src={LinkedIn} alt='LinkedIn icon' className='footer__icon-find'/>
                </div>
                <p className='find__paragraph-header'>Sr. Recruiter @ Google</p>
                <div className='match__container'>
                  <span className=' material-symbols-outlined verified__icon'>verified_user</span>
                  <div className='match'>99% match</div>
                </div>
              </div>
              <div className='find__right-buttons'>
                <button className='navbar__button save__button'>
                    Save
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Find