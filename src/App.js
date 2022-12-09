import React from 'react';
import { Header, Process, Questions, Testimonials, Footer } from './containers';
import { Navbar } from './components';
import './app.css'

const App = () => {
  return (
    <div>
        <Navbar/>
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

export default App