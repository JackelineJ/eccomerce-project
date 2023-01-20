import React from 'react'
import { Link } from "react-router-dom";

import './CartWidget.css';

const cart = require('../../assets/cart.png');

const CartWidget = () => {
    return (
        <div className='shopcartArea'> 
            <Link to={cart} className="nav-link"><img className='CartImage' src={cart} alt='items on your cart'/></Link>
            <div className='notificationCart rounded-circle'>
                <p className='notiNumber'>1</p>
            </div>
        </div>
    )
}

export default CartWidget