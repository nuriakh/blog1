import React , { Component} from 'react'
import { Container, Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import logo from './logo192.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component{
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                    <img
                    src = {logo}
                    height='30'
                    width='30'
                    className='d-inline-block align-top'
                    alt='logo'
                    /> React site
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    
                    <NavbarCollapse id='responsive-navbar-nav'>
                    
                        <Nav className='me-auto'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    
                        <Form inline>
                    
                            <FormControl
                            type='text'
                            placeholder='Search'
                            className='me-sm-2'
                            />
                            
                        </Form>

                        <Button variant='outline-info'>Search</Button>

                    </NavbarCollapse>

               
                </Container>
            </Navbar>
            
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}   />
                    <Route exact path="/about" element={<About/>}   />
                    <Route exact path="/contacts" element={<Contacts/>}  />
                    <Route exact path="/blog" element={<Blog/>}   />
                </Routes>
            </Router>
            </>
        )
    }
}