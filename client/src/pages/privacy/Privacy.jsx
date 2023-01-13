import React from 'react';
import { Navbar } from '../../components';
import { Footer } from '../../containers';
import { useOutletContext } from 'react-router-dom';
import PrivacyPolicy from '../../containers/privacy-policy/PrivacyPolicy';

const Privacy = () => {

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
        <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>
        <PrivacyPolicy/>
        <div className="grey__bg">
          <Footer/>
        </div>
    </div>
  )
}

export default Privacy