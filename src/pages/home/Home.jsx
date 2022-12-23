import React from 'react'
import { Header, Questions, Footer, Process } from '../../containers';
import Navbar from '../../components/navbar/Navbar'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
        {/* <div className="grey__bg">
          <Testimonials/>
        </div> */}
        <div className="grey__bg">
          <Process/>
        </div>
        <Questions/>
        <div className="grey__bg">
          <Footer/>
        </div>
    </div>
  )
}

export default Home