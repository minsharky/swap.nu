import './App.css';
import React from "react";
import Homepage from './pages/Homepage.js';
import Profile from './pages/Profile.js';

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    
    <div>
 
      <div class="header">

       <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        
      </div>
      
    </div>
    
  );
}

export default App;
