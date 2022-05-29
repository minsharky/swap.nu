import React from "react";
import {Button, Grid, Image, List, Checkbox, Table} from 'semantic-ui-react'
import './Homepage.css';
import Header from './Header.js'
import Header_Logged from './Header_Logged.js'

const headerFile = ({login_status}) => {
    if (login_status){
        return <Header_Logged/>
    }
    return (
    <Header/>
    );
  };

function Listing() {
    return(
        <div>
            <Header/>
            {/* <div class = 'header'>
                {headerFile(false)}
            </div> */}
            
        <div/>

    </div>
   
    );
}

export default Listing;
