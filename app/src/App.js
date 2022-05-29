import './App.css';
import React from "react";
import Homepage from './pages/Homepage.js';
import Profile from './pages/Profile.js';
import Signin_page from './pages/signin_page.js';
import Signup from './components/signup.js';

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    
    <div>

      <div class="header">

       <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin_page />} />
        </Routes>
        
      </div>
      
    </div>
    
  );
}

export default App;
