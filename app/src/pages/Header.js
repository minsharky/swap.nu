import React from "react";
import { Search, Button} from 'semantic-ui-react'
import './Homepage.css';
import logo from "./logo_trans.png";

function Header() {

  return (

    <div class="ui form">
        <div class="inline fields">
            <div class="field">
                <div class= 'logo'>
                    swap
                </div>
                <img src={logo} class='logoPic' width="100"/>
            </div>
            <div class="field">
                <div class = "searchHeader">
                    <Search fluid input= {{fluid:true}} style = {{width:'700px'}}/>
                </div>            
            </div>
            <div class="field">
                <div class = "login-signup">
                    <Button inverted color = "violet" size='huge'>Sign Up</Button>
                    <Button inverted color = "violet" size='huge'>Login</Button>
                </div>          
            </div>
        </div>
    </div>
  );
}

export default Header;
