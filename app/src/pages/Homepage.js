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
                <Image src='https://i.ebayimg.com/thumbs/images/g/mfQAAOSw66JcPOI8/s-l225.jpg' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/thumbs/images/g/xo4AAOSwe~lcPOJF/s-l225.jpg' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://i.ebayimg.com/thumbs/images/g/-F0AAOSwoRpcPN-z/s-l225.jpg' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://cdn11.bigcommerce.com/s-a4990/images/stencil/500x659/products/61/4621/Dorfman_Pacific_Roll_Up_Bucket_Hat_Light_Blue_Side__83323.1643046839.jpg?c=2' />
                <p>$40</p>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image class='image' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <p>$40</p>
            </Grid.Column>
            </Grid.Row>
        </Grid>

        </div>      

    </div>
   
    );
}

export default Homepage;
