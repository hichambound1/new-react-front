import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './App.css';
import Home from './site/Home/Home';
import Contact from './site/contact/Contact';
import About from './site/about/About';
import Notfound from './site/NotFound/Notfound';
import Profile from './site/Profile/Profile';
import Forgetpassword from './site/Forgetpassword/Forgetpassword';

import Login from './site/Login/Login';
import Register from './site/Register/Register';
import ResetPassword from "./site/Resetpassword/ResetPassword";
import Myresto from "./site/myresto/Myresto";
import axios from 'axios';
import Policies from "./site/policies/Policies";
import Dishpage from "./site/Dish/Dishpage";
// import Dishpagetest from "./site/Dish/Dishpagetest";
import Menu from "./site/menu/Menu";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ?  `Bearer ${token}` : '';
    return config;
});
function App() {
  return (
    <Router>
      <div className="App ">
    
          <div className="content">
          <Routes>
           <Route exact path="/"               element={<Home/>}/> 
           <Route exact path="/about"          element={<About/>}/> 
           <Route exact path="/policies"       element={<Policies/>}/> 
           <Route exact path="/contact"        element={<Contact/>}/> 
           <Route exact path="/profile"        element={<Profile/>}/> 
           <Route exact path="/forgetpassword" element={<Forgetpassword/>}/> 
           <Route       path="/dish/:id"       element={<Dishpage/>}/> 
           {/* <Route       path="/dishtest"       element={<Dishpagetest/>}/>  */}
           <Route       path="/menu/:id"       element={<Menu/>}/> 
           <Route exact path="/resetpassword/:token"  element={<ResetPassword/>}/> 
           <Route exact path="/myresto"        element={<Myresto/>}/> 
           <Route exact path="/login"          element={<Login/>}/> 
           <Route exact path="/register"       element={<Register/>}/> 
           <Route path="*"                      element={<Notfound/>}/> 
          </Routes>
        </div>

      </div>
    </Router>

  );
}

export default App;
