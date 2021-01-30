import React, { useState } from 'react';
import './style/products.css';

const Products = ({ products, handleClick }) => {

    const [units, setUnits] = useState(1);
   
    const handleChange = (e) =>{
        let quantity = e.target.value;
        setUnits(quantity)
    }

    return (
        <div className="products">
            {products.map((product) => (
                <div className="products-product" key={product.idMeal}>
                    <h2>{product.strMeal}</h2>
                    <img src={product.strMealThumb} alt="product" />
                    <span>Price: $ {product.price}</span>
                    <div className="cart-item-units">
                        <p>cantidad</p>
                        <input type="number" min='1' onChange={(e)=> handleChange(e)}/>
                    </div>
                    <button onClick={(e) => handleClick(e, product.idMeal, units, setUnits)}>Add to cart</button>
                </div>
            ))}


        </div>
    );
}

export default Products;