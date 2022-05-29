import './App.css';
import React from "react";
import Homepage from './pages/Homepage.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js'
import Signin_page from './pages/signin_page'
import Listing from './pages/Listing.js'
import Make_Trade from './pages/Make_Trade.js'

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    
    <div>
 
      <div class="header">

       <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element = {<Signin_page />} />
          <Route path="/listing" element = {<Listing />} />
          <Route path="/maketrade" element = {<Make_Trade />} />
        </Routes>
        
      </div>
      
    </div>
    
  );
}

export default App;
