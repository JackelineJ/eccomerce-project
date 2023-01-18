import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = () => {
    const [productCounter, setCounter] = useState (0);
    const sum = () => {
        setCounter (productCounter + 1);
    };
    const substract = () => {
        if (productCounter <= 0) {
            return
        } else {setCounter (productCounter - 1);}
    }; 
    return (
    <div className='Counter'>
        <div className='counterElement'>
            <button onClick={substract}>-</button>
            <button onClick={sum}>+</button>
        </div>
        <div className='counterElement'>
            <span>{productCounter}</span>
        </div>
        <div className='counterElement'>
            <button>Add to cart</button>
        </div>
    </div>
    )
}

export default ItemCount