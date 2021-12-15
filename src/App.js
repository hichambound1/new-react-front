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

function App() {
  return (
    <Router>
      <div className="App ">
    
          <div className="content">
          <Routes>
           <Route exact path="/" element={<Home/>}/> 
           <Route exact path="/about" element={<About/>}/> 
           <Route exact path="/contact" element={<Contact/>}/> 
           <Route exact path="/profile" element={<Profile/>}/> 
           <Route exact path="/forgetpassword" element={<Forgetpassword/>}/> 
           <Route exact path="/resetpassword" element={<ResetPassword/>}/> 
          
           <Route exact path="/login" element={<Login/>}/> 
           <Route exact path="/register" element={<Register/>}/> 
          <Route path="*" element={<Notfound/>}/> 
        </Routes>
          {/* <Switch> */}
            
            
            {/* <Route path="/oneresto/:id">
                <Oneresto />
            </Route> */}
         
            {/* <Route path="/dish/:id">
              <Dish />
            </Route> */}
          
            {/* <Route path="/pricing">
              <Pricing />
            </Route> */}

            {/* <Route path="/profile">
              <Profile />
            </Route> */}



           
            {/* <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to="/" />  : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to="/" /> : <Register />}
            </Route> */}
            
            {/* <Route path="/ForgotePassword">
              <ForgotePassword />
            </Route>
            <Route path="/resetpassword">
              <ResetPassword />
            </Route> */}

            {/* <Route path="*">
              <Notfound />
            </Route> */}


          {/* </Switch> */}
        </div>

      </div>
    </Router>

  );
}

export default App;
