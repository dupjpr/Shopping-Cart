import './style/products.css';

const Products = ({ products, handleClick }) => {




    return ( 
        <div className="products">
            {products.map((product) => (
                <div className="products-product" key={product.idMeal} onClick={(e) => handleClick(e, product.idMeal)}>
                    <h2>{product.strMeal}</h2>
                    <img src={product.strMealThumb} alt="product"/>
                    <span>Price: $ {product.price}</span>
                    <button>Add to cart</button>
                </div>
            ))}


        </div>
     );
}
 
export default Products;