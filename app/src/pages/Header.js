import React from "react";
import { Search, Button} from 'semantic-ui-react'
import './Homepage.css';

function Header() {

  return (

    <div class="ui form">
        <div class="inline fields">
            <div class="field">
                <div class= 'logo'>
                {/* <img src={logo} class='logo' width="115"/> */}
                Swap NU
                </div>
            </div>
            <div class="field">
                <div class = "searchHeader">
                    <Search fluid input= {{fluid:true}} style = {{width:'700px'}}/>
                </div>            
            </div>
            <div class="field">
                <div class = "login-signup">
                    <Button size='huge'>Sign Up</Button>
                    <Button size='huge'>Login</Button>
                </div>          
            </div>
        </div>
    </div>
  );
}

export default Header;
