import React from "react";

import {Button, Grid, Image, List, Checkbox, Table} from 'semantic-ui-react'
import './Listing.css';
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
            <div id = "listingblock">
            <img id = "listingpic" src='https://i.ebayimg.com/images/g/UyoAAOSw1xRg5Zqb/s-l500.jpg' />
            </div>
            <p> Preferred Location Meet Up: Norris</p>
            <p> Willing to negotiate: Yes!</p>
        <div/>

        <div class="righttext">
            <p> Rating/Reviews of Seller:
Tina Chen says... “Minseo Kim is a great and reliable seller! WIll trade from her again.”</p>

        </div>    

        <div class = "buysell">
                    <Button> Send Offer to Buy</Button>
                    <Button> Send Trade Offer</Button>
        </div>      

    </div>
   
    );
}

export default Listing;
