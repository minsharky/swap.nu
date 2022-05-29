import './Signup.css'
import {Input} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import React from "react";

function Signup() {

    return(
        <div>
            <h1> JOIN SWAP.NU </h1>
            <h2> Your details </h2>
            <div>
                <Input placeholder='First Name' style={{width:'200px'}}/>
                <Input placeholder='Last Name'  style={{width:'200px'}}/>
            </div>         
            <div>
                <Input placeholder='Northwestern Email' style={{width:'400px'}}/>
            </div>
            <h2> Create your username and details</h2>
            <div>
                <Input placeholder='Username' style={{width:'400px'}}/> 
            </div>
            <div>
                <Input placeholder='Password' style={{width:'400px'}}/> 
            </div>
        <div class='btn signup'>
            <Button name="signup">Sign Up</Button>
        </div>
        </div>
    );
}

export default Signup;