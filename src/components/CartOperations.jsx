import { Fragment, useState } from "react";

const CartOperations = ({ product }) => {

    const [units, setUnits] = useState(1);

    const handleUnits = (e) => {
        const units = e.target.value;
        setUnits(parseInt(units))
    };


    return (
        <Fragment>
            <div className="cart-item-units">
                <p>cantidad</p>
                <input type="number" min='1' onChange={(e) => handleUnits(e)} value={units} />
            </div>
            <div className="cart-item-price">
                <p>price:</p>
                <span>{product.price}</span>
            </div>
            <div className="cart-item-subTotal">
                <p>subtotal</p>
                <span>{units * product.price}</span>
            </div>
        </Fragment>
    );
}

export default CartOperations;