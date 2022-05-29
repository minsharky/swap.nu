import React from "react";
import {Button, Grid, Image, List, Checkbox, Table} from 'semantic-ui-react'
import './Homepage.css';
import Header from './Header.js'

function Homepage() {
    
    return(
        <div>
            <div class = 'header'>
                <Header />
            </div>
        <div/>
   
        <div class = "categories">
            <Button.Group fluid color= "violet" size = "big" buttons={['Clothing', 'Furniture', 'Books', 'Services', ';)']} />
        </div>

        <div class = "filter">
            <List>
                <List.Item class = "list_header">Department</List.Item>
                <List.Item href='#'>Men</List.Item>
                <List.Item href='#'>Women</List.Item>
                <List.Item href='#'>Unisex</List.Item>
                <List.Item href='#'>Youth</List.Item>
            </List>
            <List>
                <List.Item class = "list_header">Price</List.Item>
                <List.Item href='#'>Under $25</List.Item>
                <List.Item href='#'>$25-$50</List.Item>
                <List.Item href='#'>$50-$100</List.Item>
                <List.Item href='#'>$100-$200</List.Item>
                <List.Item href='#'>Over $200</List.Item>
            </List>
            <List>
                <List.Item class = "list_header">Condition</List.Item>
                <List.Item href='#'>New</List.Item>
                <List.Item href='#'>Excellent</List.Item>
                <List.Item href='#'>Good</List.Item>
                <List.Item href='#'>Fair</List.Item>
            </List>
            <div class= "color">
                <Table.Cell>
                <List.Item class = "list_header">Color</List.Item>
                    <Checkbox label='Blue' /><br />
                    <Checkbox label='Red' /><br /> 
                    <Checkbox label='Yellow' /><br />
                    <Checkbox label='Black' /><br /> 
                    <Checkbox label='Green' /><br />
                    <Checkbox label='Purple' /><br /> 
                    <Checkbox label='Gray' />
                </Table.Cell>
            </div>
            
        </div>

        <div class = 'itemGrid'>

        <Grid>
            <Grid.Row columns={4}>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/UyoAAOSw1xRg5Zqb/s-l500.jpg' />
                <p>$4</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://azoffice.com/wp-content/uploads/2020/12/img-6865.jpg' />
                <p>$20</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/123075710/dfb99308d9d1eab9c603113f2601c29c.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9fd16fb3c4c66c00ad2b623ff27ca010' />
                <p>$95</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://cdn11.bigcommerce.com/s-a4990/images/stencil/500x659/products/61/4621/Dorfman_Pacific_Roll_Up_Bucket_Hat_Light_Blue_Side__83323.1643046839.jpg?c=2' />
                <p>$6</p>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image class='image' src='https://oneupfurniture.com/wp-content/uploads/2022/04/used-2-piece-sectional-philadelphia-pa-1-1-300x300.jpg' />
                <p>$120</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/thumbs/images/g/xo4AAOSwe~lcPOJF/s-l225.jpg' />
                <p>$9</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/CIwAAOSwsExhR8ir/s-l500.jpg' />
                <p>$3</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/u-IAAOSw6dhfS~H2/s-l300.jpg' />
                <p>$4</p>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/nWEAAOSwKlFcs1Un/s-l500.jpg' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/490AAOSweYZhwz-R/s-l500.jpg' />
                <p>$10</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/images/g/jQAAAOSwV91fAM7-/s-l500.jpg' />
                <p>$8</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://res.cloudinary.com/pawnguru/image/fetch/c_scale,f_auto,fl_lossy,q_auto,w_200/https://www.pawnguru.com/images/item/445844/mini-fridge-with-freezer.jpg' />
                <p>$60</p>
            </Grid.Column>
            </Grid.Row>
        </Grid>

        </div>      

    </div>
   
    );
}

export default Homepage;
