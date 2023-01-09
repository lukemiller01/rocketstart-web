import React from 'react';
import { Home, Blog, Pricing, About, Product, Privacy, Message, Find, Login } from './pages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './miscellaneous/ScrollToTop';
import { UserAuthContextProvider } from './context/AuthProvider';
import LogInRequired from './routes/LogInRequired';
import UserRedirect from './routes/UserRedirect';
import './app.css';
import HomeRedirect from './routes/HomeRedirect';
import AuxiliaryRedirect from './routes/AuxiliaryRedirect';

const App = () => {

  return (
    <div>
      <UserAuthContextProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>

            {/* Login  */}
            <Route path='/login' element={<Login/>}/>

            {/* Dashboard Toggle: redirects to /message if user is logged in  */}
            <Route element={<UserRedirect/>}>
              <Route path='/' element={<Home navOne={''} navTwo={'navbar__hidden'} logoURL={'/'}/>} />
            </Route>

            {/* Private Pages: redirects to /login if user is not logged in */}
            <Route element={<LogInRequired/>}>
              <Route path='/message' element={<Message/>}/>
              <Route path='/find' element={<Find/>}/>
            </Route>

            {/* Home Toggle: redirects to / if user is not logged in */}
            <Route element={<HomeRedirect/>}>
              <Route path='/home' element={<Home navOne={'navbar__hidden'} navTwo={''} logoURL={'/home'}/>} />
            </Route>

            {/* Auxiliary Pages: changes navbar based on user state */}
            <Route element={<AuxiliaryRedirect/>}>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/pricing' element={<Pricing/>}/>
              <Route path='/privacy' element={<Privacy/>}/>
            </Route>
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
      {/* Does this need to be wrapped?  */}
    </div>
  )
}

export default App