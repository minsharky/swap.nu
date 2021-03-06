import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { auth } from './../server/firebase_auth';
import Header from './Header.js'
import {Button, Input} from "semantic-ui-react";
import Signup from './Signup.js'

function signin_page() {

    // Makes variables to store the emails and passwords inputted
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    // Generates user and adds to Firebase database and user info stored in 
    // user variable
    // const register = async () => {
    //     try{
    //         // We need to pass the auth variable from the Firebase config file and data to create account
    //     const user = await createUserWithEmailAndPassword(
    //         auth, 
    //         registerEmail, 
    //         registerPassword
    //     );
    //     console.log(user)
    //     // Catches errors like logging in with accounts that don't exist
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };

    const login = async () => {
        try{
            // We need to pass the auth variable from the Firebase config file and data to create account
        const user = await signInWithEmailAndPassword(
            auth, 
            loginEmail, 
            loginPassword
        );
        console.log(user)
        // Catches errors like logging in with accounts that don't exist
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };


    return(
        <div className="App">
            <Header/>

            {/* <div>
                <h3> Register User </h3>
                <input placeholder = "Email"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}
                />

                <input placeholder = "Password"
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
                />

                <button onClick = {register} > Create account </button>
            </div> */}

            
            <div class = "login">
                <h2> Login</h2>
                <Input placeholder='Northwestern Email' style={{width:'490px'}} 
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
                <br/>
                <br/>
                <Input placeholder='Password' style={{width:'490px'}}
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}/>
                <div class ="loginBtn">
                    <br/>
                    <Button color= "violet" onClick = {login}> Login </Button>
                </div>

                <h3>Currently logged in as:  </h3>
                {/* {user?.email} */}

                <Button color= "violet" onClick={(logout)}>Log out</Button>



            </div>
        </div>
    );

}

export default signin_page;