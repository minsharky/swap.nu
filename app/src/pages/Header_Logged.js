import React from "react";
import { Search, Button} from 'semantic-ui-react'
import './Homepage.css';
import logo from "./logo_trans.png";
import { useNavigate } from "react-router-dom";


//This header component is called after a user is logged in
function Header_Logged() {
    const navigate = useNavigate();

  return (

    <div class="ui form">
        <div class="inline fields">
            <div class="field" onClick={() => navigate('/')}>
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
                    <Button onClick={() => navigate('/messages')} inverted color = "violet" size='large' > Messages </Button>
                    <Button inverted color = "violet" size='large' onClick={() => navigate("/profile")}> My Account </Button>
                </div>          
            </div>
        </div>
    </div>
  );
}

export default Header_Logged;