import React, {Component} from "react"
import CarouselBox from "../Components/CarouselBox"
import  Carousel from "react-bootstrap/Carousel"
import  {Container}  from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

export default class Home extends Component{
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className= "text-center n-4">Our team</h2>
                
                <CardGroup className="m-4" >
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant = "top"
                        src= "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font? 
                            </Card.Text>
                            <Button variant = "primary">About team</Button>
                        </Card.Body>
                        </Card>
                       
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Manager</Card.Title>
                            <Card.Text>
                            So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font? 
                            </Card.Text>
                            <Button variant = "primary">About managers</Button>
                        </Card.Body>
                        <Card.Img variant = "bottom"
                        src= "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?cs=srgb&dl=pexels-energepiccom-288477.jpg&fm=jpg"
                        />
                        </Card>

                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant = "top"
                        src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"                        />
                        <Card.Body>
                            <Card.Title>WorkSpace</Card.Title>
                            <Card.Text>
                            So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font? 
                            </Card.Text>
                            <Button variant = "primary">About workspace</Button>
                        </Card.Body>
                        </Card>
                        
                    </CardGroup>
                    
                     
            </Container>
            </>
        )
    }
} 