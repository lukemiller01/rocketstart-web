import React from 'react';
import Navbar2 from '../../components/navbar2/Navbar2';
import './find.css';

const Find = () => {

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
              <input placeholder='Job URL'></input>
              <button className='find__button' id='find-button' onClick={handleSearch}>Find</button>
            </div>
            <p id='poc__title' className='find__paragraph-header' style={{visibility: 'hidden'}}>Hiring for this role:</p>
            <div id='fourth-row' className='row__four' style={{visibility: 'hidden'}}>
              <div>
                <h5 className='contact__name'>Luke Miller</h5>
                <p className='find__paragraph-header'>University Recruiter @ Monsters Inc.</p>
                <div className='match__container'>
                  <span className=' material-symbols-outlined verified__icon'>verified_user</span>
                  <div className='match'>99% match</div>
                </div>
              </div>
              <div>
              <button className='navbar__button save__button'>
                  <p className='navbar__button-text'>Save</p>
              </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Find