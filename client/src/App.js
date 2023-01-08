import React from 'react';
import { Home, Blog, Pricing, About, Product, Privacy, Message, Find } from './pages';
import { SignUp } from './modals'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './miscellaneous/ScrollToTop';
import PrivateRoutes from './routes/PrivateRoutes';
import { UserAuthContextProvider } from './context/AuthProvider';
import './app.css';

const App = () => {

  return (
    <div>
      <UserAuthContextProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/privacy' element={<Privacy/>}/>

            <Route path='/login' element={<SignUp/>}/>

            <Route element={<PrivateRoutes/>}>
              <Route path='/message' element={<Message/>}/>
              <Route path='/find' element={<Find/>}/>
            </Route>

            {/* <Route path='/message' element={<Message/>}/>
            <Route path='/find' element={<Find/>}/> */}
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
      {/* Does this need to be wrapped?  */}
    </div>
  )
}

export default App