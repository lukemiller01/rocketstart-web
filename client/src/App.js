import React from 'react';
import ReactGA from 'react-ga4';

import { Home, Blog, Pricing, About, Product, Privacy, Terms, Message, Find, Login, Action, Account, NotFound } from './pages';
// import { Action } from './pages/auth/Action'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './miscellaneous/ScrollToTop';
import { UserAuthContextProvider } from './context/AuthProvider';

import './app.css';

import LogInRequired from './routes/LogInRequired';
import UserRedirect from './routes/UserRedirect';
import HomeRedirect from './routes/HomeRedirect';
import AuxiliaryRedirect from './routes/AuxiliaryRedirect';

const App = () => {

  ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);

  return (
    <div>
      <UserAuthContextProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>

            <Route path='/auth/action/' element={<Action/>}/>

            {/* Dashboard Toggle: redirects to /message if user is logged in  */}
            <Route element={<UserRedirect/>}>
              <Route path='/' element={<Home navOne={''} navTwo={'navbar__hidden'} logoURL={'/'}/>} />
              <Route path='/login' element={<Login/>}/>
            </Route>

            {/* Private Pages: redirects to /login if user is not logged in */}
            <Route element={<LogInRequired/>}>
              <Route path='/message' element={<Message/>}/>
              <Route path='/find' element={<Find/>}/>
              <Route path='/account' element={<Account/>}/>
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
              <Route path='/terms' element={<Terms/>}/>
            </Route>

            {/* If the typed URL doesn't exist  */}
            <Route path='*' element={<NotFound />}/>
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
      {/* Does this need to be wrapped?  */}
    </div>
  )
}

export default App