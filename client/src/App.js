import React from 'react';
import { Home, Blog, Pricing, About, Product, Privacy, Message, Find, SignIn, SignUp } from './pages';
import { Error } from './components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './miscellaneous/ScrollToTop';
import './app.css';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // firebase.auth().onAuthStateChanged((user) => {
  //   return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  // });

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Error/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/privacy' element={<Privacy/>}/>

            <Route path='/sign_in' element={<SignIn/>}/>
            <Route path='/sign_up' element={<SignUp/>}/>

            <Route path='/message' element={<Message/>}/>
            <Route path='/find' element={<Find/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App