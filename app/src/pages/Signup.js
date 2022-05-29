import './Signup.css'
import {Input, Button, Dropdown} from 'semantic-ui-react'
import Header from './Header.js'
import Header_Logged from './Header_Logged.js'
import students from "./enteringstudents.jpg"
import React, { useState } from "react";
import { 
    createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from './../server/firebase_auth';

const residence = [
    {
      key: 'Willard',
      text: 'Willard',
      value: 'Willard',
    },
    {
        key: 'Lincoln',
        text: 'Lincoln',
        value: 'Lincoln',
      },
      {
        key: 'Foster-Walker',
        text: 'Foster-Walker',
        value: 'Foster-Walker',
      },
      {
        key: 'Allison',
        text: 'Allison',
        value: 'Allison',
      },
      {
        key: 'Kemper',
        text: 'Kemper',
        value: 'Kemper',
      },
      {
          key: 'Sargent',
          text: 'Sargent',
          value: 'Sargent',
        },
        {
          key: 'Jones',
          text: 'Jones',
          value: 'Jones',
        },
        {
          key: 'Off-Campus Housing',
          text: 'Off-Campus Housing',
          value: 'Off-Campus Housing',
        }
  ]

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Generates user and adds to Firebase database and user info stored in 
    // user variable
    const register = async () => {
      try{
          // We need to pass the auth variable from the Firebase config file and data to create account
      const user = await createUserWithEmailAndPassword(
          auth, 
          registerEmail, 
          registerPassword
      );
      console.log(user)
      // Catches errors like logging in with accounts that don't exist
      } catch (error) {
          console.log(error.message);
      }
  };

    return(
        <div class = 'top'>
            <Header/>
            <div class = "head">
              <h1> JOIN SWAP.NU </h1>
              <h2> Your Details </h2>
              <div>
                  <Input placeholder='First Name' style={{width:'240px'}}/>

                  <Input placeholder='Last Name'  style={{width:'240px', left: '10px'}}/>
              </div>         
              <br/>
              <div>
                  <Input placeholder='Northwestern Email' style={{width:'490px'}} 
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
              </div>
              <h2> Create your Username and Password</h2>
              <div>
                  <Input placeholder='Username' style={{width:'490px'}}/> 
              </div>
              <br/>
              <div>
                  <Input placeholder='Password' style={{width:'490px'}}
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/> 
              </div>
              <br/>
              <h2> Where do you live?</h2>
              <div>
              <Dropdown
                  placeholder='Select Residence'
                  fluid
                  style={{width:'490px'}}
                  selection
                  options={residence}
              />
              </div>
              <br/>
          <div class='btnSignup'>
              <Button name="signup" color= "violet" onClick = {register} >Sign Up</Button>
          </div>

        </div>
        <div class = "signUpPic">
          <img src={students} class='studentPic' width="500"/>
        </div>
            
      </div>
    );
}

export default Signup;