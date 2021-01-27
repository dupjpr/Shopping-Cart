import './style/cartShop.css';
const CartShop = ({cart}) => {

    return ( 
        <div className="cart" >
            <h1>this is the cart</h1>
            {cart.map((product)=>(
                <div className="cart-item" key={product.idMeal}>
                    <span>delete</span>
                    <h3>{product.strMeal}</h3>
                    <img src={product.strMealThumb} alt="product"/>
                    <p>{product.price}</p>

                </div>
            ))}

        </div>
     );
}
 
export default CartShop;