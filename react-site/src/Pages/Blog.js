import React, {Component} from "react";
import { CardGroup, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';


export default class Contacts extends Component{
    render() {
        return (
            
            <Container>
                <Row>
            
            <Col md='9'>
            <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
      <Card.Footer className="text-muted">98 days ago</Card.Footer>
      

      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>WWR is coming again?</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
      <Card.Footer className="text-muted">18 days ago</Card.Footer>


      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Putin started the war</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
      <Card.Footer className="text-muted">135 days ago</Card.Footer>

      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>We are waiting for peace</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    
    </Col>

    <Col md='3'>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Html</Accordion.Header>
        <Accordion.Body>
          Topic about lajnlsk halskdjalsh lahaldnaodhs
          sdjdshlsdsdj 
          sd sdsdfow quyd akj aa;sjakdjaojdawidhaln d
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>react</Accordion.Header>
        <Accordion.Body>
           React is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>IT</Accordion.Header>
        <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </Col>


    </Row>
 </Container>

    
            
        )
    }
}