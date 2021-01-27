import React, { useEffect, useState } from 'react';
import CartShop from './components/CartShop';
import Header from './components/Header';
import Products from './components/Products';

import './app.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => response.json())
      .then(data => {
        const newSet = data.meals.map((product)=>{return {...product, price:1200}});
        setProducts(newSet);
      });
  }, []);

  const handleClick = (e, id) => {
    const selectProduct = products.filter((product) => product.idMeal === id);
    const checkProduct = cart.some((item) => (item.idMeal === id));

    if (!checkProduct) {
      setCart([...cart, ...selectProduct]);
    }
  }

  console.log(cart);

  return (

    <div className="App">
      <Header />
      <Products products={products} handleClick={handleClick} />
      <CartShop cart={cart} />
    </div>

  );
}

export default App;
