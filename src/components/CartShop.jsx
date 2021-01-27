import './style/cartShop.css';
const CartShop = ({ cart, handleClickCart }) => {

    return (
        <div className="cart" >
            <h1>this is the cart</h1>
            {cart.map((product) => (
                <div className="cart-item" key={product.idMeal}>
                    <span onClick={()=> handleClickCart(product.idMeal)}><i className="fas fa-trash"></i></span>
                    <h3>{product.strMeal}</h3>
                    <img src={product.strMealThumb} alt="product" />
                    <div className="cart-item-units">
                        <p>cantidad</p>
                        <button>-</button>
                        <span>9</span>
                        <button>+</button>
                    </div>
                    <div className="cart-item-price">
                        <p>price:</p>
                        <span>{product.price}</span>
                    </div>
                    <div className="cart-item-subTotal">
                        <p>subtotal</p>
                        <span>$999999</span>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default CartShop;