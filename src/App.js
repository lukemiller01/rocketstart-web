import React from 'react';
import { Home, Blog, Privacy, About, Product } from './pages';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Miscellaneous/ScrollToTop';
import './app.css';

const App = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/blog' element={<Blog/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Routes>
    </div>
  )
}

export default App