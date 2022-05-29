import React from "react";
import { Search, Button, Grid, Image, List} from 'semantic-ui-react'
import './Homepage.css';

function Homepage() {
    
    return(
        <div>
            <div class = 'header'>
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
            </div>
        <div/>

        <div class = "categories">
            <Button.Group fluid size = "big" buttons={['Clothing', 'Furniture', 'Books', 'Services', ';)']} />
        </div>

        <div class = "filter">
            <List>
                <List.Item class = "list_header">Department</List.Item>
                <List.Item href='#'>Men's Clothing</List.Item>
                <List.Item href='#'>Women's Clothing</List.Item>
                <List.Item href='#'>Unisex Clothing</List.Item>
                <List.Item href='#'>Youth Clothing</List.Item>
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
                <List.Item href='#'>$50-$100</List.Item>
                <List.Item href='#'>$100-$200</List.Item>
                <List.Item href='#'>Over $200</List.Item>
            </List>
        </div>

        <div class = 'itemGrid'>

        <Grid>
            <Grid.Row columns={4}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image class='image' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            </Grid.Row>
        </Grid>

        </div>      

    </div>
   
    );
}

export default Homepage;
