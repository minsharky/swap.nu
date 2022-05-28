<<<<<<< HEAD
import React from "react";
//import ReactDOM from "react-dom"

import './App.css';

import Signup from './Signup';
function App() {

  return (
    <div>
      <div class="name">

        <h1>swap.nu</h1>

      </div>
    </div>
  );
}

export default App;
=======
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
>>>>>>> f6bd0817415709f15f54dce6ae452c2398300531
