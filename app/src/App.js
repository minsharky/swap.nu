import './App.css';
import React from "react";
import Homepage from './pages/Homepage.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js'
import Signin_page from './pages/signin_page'
import Listing from './pages/Listing'
import { Helmet } from 'react-helmet'

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    
    <div>
      <Helmet>
         <meta charSet="utf-8" />
          <title>swap NU</title>
          <meta name="description" content="swap on tab" />
      </Helmet>
      <div class="header">

       <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element = {<Signin_page />} />
          <Route path="/listing" element = {<Listing />} />
        </Routes>
        
      </div>
      
    </div>
    
  );
}

export default App;
