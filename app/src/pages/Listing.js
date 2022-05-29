import React from "react";
import {Button, Image} from 'semantic-ui-react'
import './Homepage.css';
import Header from './Header.js'
import Header_Logged from './Header_Logged.js'
import './Listing.css'

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
            <div class = "itemImage">
                <Image src='https://i.ebayimg.com/images/g/UyoAAOSw1xRg5Zqb/s-l500.jpg' />
            </div>
            
        <div/>

    </div>
   
    );
}

export default Listing;
