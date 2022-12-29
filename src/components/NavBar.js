import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const cart = require('../assets/cart.png');

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
    
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About Us
                    </a>
                </li>
                <li className="nav-item">
                    <div className='shopcartArea'>
                        <a className="nav-link" href="#">
                            <img className='CartImage' src={cart} alt='shopping cart image'/>
                        </a>
                        <div className='notificationCart rounded-circle'>
                            <p className='notiNumber'>1</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBar
