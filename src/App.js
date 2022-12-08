import React from 'react';
import { Header, Process, Testimonials } from './containers';
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
    </div>
  )
}

export default App