import React, { useState } from 'react';
import CartOperations from './CartOperations';

import './style/cartShop.css';
const CartShop = ({ cart, handleClickCart }) => {

 


    return (
        <div className="cart" >
            <h1>this is the cart</h1>
            {cart.map((product) => (
            <div className="cart-item" key={product.idMeal}>
                <span onClick={() => handleClickCart(product.idMeal)}><i className="fas fa-trash"></i></span>
                <h3>{product.strMeal}</h3>
                <img src={product.strMealThumb} alt="product" />
                <CartOperations product={product}/>
            </div>
            ))}
            <div className="cart-total">
                <h3>total</h3>
                <span>$7777</span>
            </div>
        </div>
    );
}

export default CartShop;