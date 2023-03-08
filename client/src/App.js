import React from "react";
import "./app.css";

import {
  Home,
  Blog,
  About,
  Product,
  Privacy,
  Terms,
  Message,
  Contact,
  Login,
  Action,
  Account,
  NotFound,
  Thanks,
  Error,
  Article1,
  Article2,
} from "./pages";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./miscellaneous/ScrollToTop";
import { UserAuthContextProvider } from "./context/AuthProvider";

// Routes with Outlet for authorization:
import LogInRequired from "./routes/LogInRequired";
import UserRedirect from "./routes/UserRedirect";
import HomeRedirect from "./routes/HomeRedirect";
import AuxiliaryRedirect from "./routes/AuxiliaryRedirect";
import TransactionRedirect from "./routes/TransactionRedirect";

// Since this application (currently) doesn't use its store, the application does not need a dispatch to gather state.
const App = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/auth/action/" element={<Action />} />

            {/* Dashboard Toggle: redirects to /message if user is logged in  */}
            <Route element={<UserRedirect />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Private Pages: redirects to /login if user is not logged in */}
            <Route element={<LogInRequired />}>
              <Route path="/message" element={<Message />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path='/find' element={<Find/>}/> */}
              <Route path="/account" element={<Account />} />
            </Route>

            {/* Home Toggle: redirects to / if user is not logged in */}
            <Route element={<HomeRedirect />}>
              <Route path="/home" element={<Home />} />
            </Route>

            {/* Auxiliary Pages: changes navbar based on user state */}
            <Route element={<AuxiliaryRedirect />}>
              <Route path="/blog" element={<Blog />} />
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              {/* <Route path='/pricing' element={<Pricing/>}/> */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              <Route
                path="/blog/how-I-landed-my-job-at-spacex"
                element={<Article1 />}
              />
              <Route
                path="/blog/why-I-built-rocketstart"
                element={<Article2 />}
              />
            </Route>

            <Route element={<TransactionRedirect />}>
              <Route path="/thank-you" element={<Thanks />} />
              <Route path="/error" element={<Error />} />
            </Route>

            {/* If the typed URL doesn't exist  */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
};

export default App;
