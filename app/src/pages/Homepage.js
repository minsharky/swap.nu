import React from "react";
import { Search, Button, Grid, Image} from 'semantic-ui-react'
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
