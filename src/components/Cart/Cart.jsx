import './Cart.css'
import React from 'react';

const Cart = (props) => {

    const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice += product.price;
        totalShipping +=product.shipping;
    }
    let tax = totalPrice*.07;
    let grandTotal = totalPrice + totalShipping + tax; 

    return (
        <div className='cart'>
            <h4>Oder Summery</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total shipping: {totalShipping} </p>
            <p>Tax: {tax.toFixed(2)} </p>
            <h6>Grand Total: {grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;