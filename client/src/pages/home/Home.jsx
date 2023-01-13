import React from 'react'
import { Header, Questions, Footer, Process, CallToAction } from '../../containers';
import { Navbar } from '../../components';
import { Helmet } from 'react-helmet';

const Home = ({navOne, navTwo, logoURL}) => {
  
  return (
    <div>
        <Helmet>
          <title>Find the recruiter for any job in one click · Rocketstart</title>
        </Helmet>
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