import React from 'react'
import { Header, Process, Questions, Testimonials, Footer } from '../../containers';


const Home = () => {
  return (
    <div>
      <Header/>
        <div className="grey__bg">
          <Testimonials/>
        </div>
        <Process/>
        <Questions/>
        <div className="grey__bg">
          <Footer/>
        </div>
    </div>
  )
}

export default Home