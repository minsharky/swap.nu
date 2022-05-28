import './App.css';
import React from "react";
import Homepage from './Homepage';
import Profile from './Profile';

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
