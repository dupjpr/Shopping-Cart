import { useState } from "react";

const CartOperations = ({ product, quantityInfo }) => {

    const [units, setUnits] = useState(1);
    // const [element, setElement] = useState('');


    const handleChange = (e) =>{
        let quantity = e.target.value;
        // let input = e.target;
        setUnits(quantity);
        // setElement(input);
        quantityInfo(units,setUnits)
    }


    return (

        <div className="cart-item-units">
            <p>cantidad</p>
            <input type="number" min='1' value={units} onChange={(e) => handleChange(e)} />
        </div>


    );
}

export default CartOperations;