import React, {Component} from "react"
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap"


export default class Contacts extends Component{
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className ='text-center'>Contact us</h1>
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type = 'email'placeholder="Enter email"/>
                        <Form.Text>
                            We'll not share your email with anyone else
                        </Form.Text>
                    </FormGroup>

                    <Form.Group controlId="formBasicPassword">
                    <FormLabel>Example textarea</FormLabel>
                    <Form.Control as = "textarea" rows = '3'/>

                    </Form.Group>
                    
                    <Form.Group controlId="formBasicCheckbox">
                    <FormCheck type = "checkbox" label ="Check me out"/>
                     </Form.Group>

                     <Button variant = "primary" type = "submit">Submit</Button>
                </Form>

            </Container>
        )
    }
}