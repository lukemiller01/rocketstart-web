import React from 'react';
import { Home, Blog, Pricing, About, Product, Privacy, Message, Find } from './pages';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Miscellaneous/ScrollToTop';
import './app.css';

const App = () => {
  return (
    <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/blog' element={<Blog/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/privacy' element={<Privacy/>}/>

          <Route path='/message' element={<Message/>}/>
          <Route path='/find' element={<Find/>}/>
        </Routes>
    </div>
  )
}

export default App