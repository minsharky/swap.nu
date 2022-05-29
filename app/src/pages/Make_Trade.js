import React from "react";
import {Button, Dropdown, Input, Label} from 'semantic-ui-react'
import './Homepage.css';
import Header from './Header.js'
import Header_Logged from './Header_Logged.js'
import './Make_Trade.css'

const myItems = [
    {
        key: 'a',
        text: 'Organic Chemistry Textbook',
        value: '$5',
        image: { avatar: true, src: 'https://i.ebayimg.com/images/g/MbMAAOSwWcBe5WHK/s-l500.jpg'},
      },
      {
        key: 'b',
        text: 'Northwestern Hat',
        value: '$10',
        image: { avatar: true, src: 'https://i.ebayimg.com/images/g/ZdUAAOSwtKxiL9Mq/s-l500.jpg' }
      }
  ]

  const theirItems = [
    {
        key: 'c',
        text: 'Mini Fridge',
        value: '$80',
        image: { avatar: true, src: 'https://res.cloudinary.com/pawnguru/image/fetch/c_scale,f_auto,fl_lossy,q_auto,w_200/https://www.pawnguru.com/images/item/161177/black-and-decker-mini-fridge.jpg'},
      },
      {
        key: 'd',
        text: 'Tank Top',
        value: '$3',
        image: { avatar: true, src: 'https://i.ebayimg.com/images/g/7DAAAOSwpSpe5Z~Q/s-l400.jpg' }
      },
      {
        key: 'e',
        text: 'Blue Shirt',
        value: '$4',
        image: { avatar: true, src: 'https://i.ebayimg.com/images/g/UyoAAOSw1xRg5Zqb/s-l500.jpg' }
      }
      
  ]

const headerFile = ({login_status}) => {
    if (login_status){
        return <Header_Logged/>
    }
    return (
    <Header/>
    );
  };

function Make_Trade() {
    return(
        <div>
            <Header_Logged/>
            {/* <div class = 'header'>
                {headerFile(false)}
            </div> */}
            <div class = "Offers">
                <div class = "myOffer">
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        options={myItems}
                        placeholder='Items You Wish to Offer '
                    />

                </div>

                <div class = "theirOffer">
                    <Dropdown
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        options={theirItems}
                        placeholder='Requested Items '
                    />

                </div>

            </div>
        
            <div class= "moneyBox">

                <div class = "moneyOffer"> 
                    <p> Cash to Add-in as Offer</p>
                    <Input labelPosition='right' type='text' placeholder='Amount'>
                        <Label basic>$</Label>
                        <input />
                    </Input>
                    
                </div>

                <div class = "moneyRequest"> 
                    <p> Cash to Request</p>
                    <Input labelPosition='right' type='text' placeholder='Amount'>
                        <Label basic>$</Label>
                        <input />
                    </Input>
                    
                </div>

                <div class = "message">
                    <Input style={{width:'500px'}} placeholder='Send a Message Here...' />
                    <Button class= "send"> Send To User!</Button>
                </div>

            </div>

    
            
        <div/>

    </div>
   
    );
}

export default Make_Trade;
