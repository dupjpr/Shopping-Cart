import React, { useState } from 'react';
import './style/products.css';

const Products = ({ products, handleClick }) => {

    const [units, setUnits] = useState(1);
    const [element, setElement] = useState('');

    const handleChange = (e) => {
        let quantity = e.target.value;
        let input = e.target;
        setUnits(quantity);
        setElement(input);
    }

    return (
        <div className="products">
            {products.map((product) => (
                <div className="products-product" key={product.idMeal}>
                    <div className="products-product-topSection">
                        <h3>{product.strMeal}</h3>
                        <img src={product.strMealThumb} alt="product" />
                        <span>Price: $ {product.price}</span>
                    </div>
                    <div className="products-product-bottomSection">
                        <button onClick={(e) => handleClick(e, product.idMeal, units, setUnits, element)}>Add to cart</button>
                        <input type="number" min='1' onChange={(e) => handleChange(e)} placeholder='1'/>
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Products;