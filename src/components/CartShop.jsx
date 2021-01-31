import React, { useState } from 'react';

import './style/cartShop.css';

const CartShop = ({ cart, handleClickCart, total, cartAction, setCartAction }) => {


    const handleClickCloseCart = () => {
        if (cartAction === 'cart-action') {
            setCartAction('cart');
        }
    };

    return (
        <div className={cartAction} >
            <div className="cart-header">
                <h2>Your Dishes</h2>
                <p onClick={(e) => handleClickCloseCart(e)}>x</p>
                <hr />
            </div>
            {cart.map((product) => (
                <div className="cart-item" key={product.idMeal}>
                    <div className="cart-item-topSection">
                        <div className="cart-item-img">
                            <img src={product.strMealThumb} alt="product" />
                        </div>
                        <div className="cart-item-description">
                            <h4>{product.strMeal}</h4>
                            <p>{product.quantity} X $ {product.price}</p>
                        </div>
                    </div>
                    <div className="cart-item-bottomSection">
                        <span className='cart-item-bottomSection-subT'>Subtotal: $ {product.price * product.quantity}</span>
                        <span onClick={() => handleClickCart(product.idMeal)}><i class="far fa-minus-square"></i></span>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <hr />
                <span>Total: $ {total}</span>
                <button className='cart-total-button'>PAY</button>
            </div>
        </div>
    );
}

export default CartShop;