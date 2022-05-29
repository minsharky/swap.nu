import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { auth } from './../server/firebase_auth';

function signin_page() {

    // Makes variables to store the emails and passwords inputted
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


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
            <div>
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
            </div>




            
            
            <div>
                <h3> Login</h3>
                <input placeholder = "Email"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />

                <input placeholder = "Password"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}
                />

                <button onClick = {login}> Login </button>

                <h4>Currently logged in as: </h4>
                {user?.email}

                <button onClick={(logout)}>Log out</button>



            </div>
        </div>
    );

}

export default signin_page;