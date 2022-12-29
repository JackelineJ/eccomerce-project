import React from 'react'

const cart = require('../assets/cart.png');

const CartWidget = () => {
    return (
        <div className='shopcartArea'>
            <a className="nav-link" href="#">
                <img className='CartImage' src={cart} alt='items on your cart'/>
            </a>
            <div className='notificationCart rounded-circle'>
                <p className='notiNumber'>1</p>
            </div>
        </div>
    )
}

export default CartWidget