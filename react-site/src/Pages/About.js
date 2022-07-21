import React, {Component} from "react"
import { Nav, Tab, Container, Row, Col } from "react-bootstrap"
import pinSite from '../assets/site.jpeg'

export default class About extends Component{
    render() {
        return (
            <Container>
                <Tab.Container id= 'ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant = "pills " className = 'flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                    <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm = {9}>
                            <Tab.Content className="mt-5" >
                                <Tab.Pane  eventKey='first'>
                                    <img src = {pinSite}/>
                                    <p>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane  eventKey='second'>
                                    <img 
                                     width='770px' 
                                    src ="https://images.pexels.com/photos/7433839/pexels-photo-7433839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    />
                                    <p>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane  eventKey='third'>
                                    <img src = {pinSite}/>
                                    <p>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane  eventKey='fourth'>
                                    <img src = {pinSite}/>
                                    <p>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane  eventKey='fifth'>
                                    <img src = {pinSite}/>
                                    <p>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}