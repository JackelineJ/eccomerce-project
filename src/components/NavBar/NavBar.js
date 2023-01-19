import React from 'react'

import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#">Queen</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Studio Albums</Nav.Link>
                    <Nav.Link>Live Albums</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                </Nav>
            </Container>
            <Nav.Link href="#cart">
                <CartWidget />
            </Nav.Link>
        </Navbar>
    );
}
export default NavBar;