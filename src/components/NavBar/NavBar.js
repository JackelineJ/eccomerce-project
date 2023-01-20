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
                <Navbar.Brand href="/"><img className='queenLogo' src='/queenlogo.png' alt='queen logo'/></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/products">Studio Albums</NavLink>
                    <NavLink to="">Live Albums</NavLink>
                    <NavLink to="/aboutUs">About Us</NavLink>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
}
export default NavBar;