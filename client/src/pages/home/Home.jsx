import React from 'react'
import { Header, Questions, Footer, Process, CallToAction } from '../../containers';
import { Navbar } from '../../components';

const Home = ({navOne, navTwo, logoURL}) => {
  
  return (
    <div>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL} />
      <Header/>
        {/* <div className="grey__bg">
          <Testimonials/>
      </div> */}
      <Process/>
      <Questions/>
      <CallToAction/>
      <div className="grey__bg">
        <Footer/>
      </div>
    </div>
  )
}

export default Home