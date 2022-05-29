import './Signup.css'
import {Input, Button, Dropdown} from 'semantic-ui-react'
import React from "react";
import Header from './Header.js'

const residence = [
    {
      key: 'Willard',
      text: 'Jenny Hess',
      value: 'Jenny He',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]

function Signup() {

    return(
        <div class = 'header'>
            <Header />
            <h1> JOIN SWAP.NU </h1>
            <h2> Your Details </h2>
            <div>
                <Input placeholder='First Name' style={{width:'200px'}}/>

                <Input placeholder='Last Name'  style={{width:'200px', left: '10px'}}/>
            </div>         
            <br/>
            <div>
                <Input placeholder='Northwestern Email' style={{width:'410px'}}/>
            </div>
            <h2> Create your Username and Password</h2>
            <div>
                <Input placeholder='Username' style={{width:'400px'}}/> 
            </div>
            <br/>
            <div>
                <Input placeholder='Password' style={{width:'400px'}}/> 
            </div>
            <br/>
            <h2> Where do you live?</h2>
            <div>
            <Dropdown
                placeholder='Select Residence'
                fluid
                selection
                options={residence}
            />
            </div>
            <br/>
        <div class='btnSignup'>
            <Button name="signup">Sign Up</Button>
        </div>
        </div>
    );
}

export default Signup;