import React from 'react'
import { Header, Questions, Footer, Process, CallToAction } from '../../containers';
import Navbar from '../../components/navbar/Navbar'

const Home = () => {

  return (
    <div>
      <Navbar/>
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