import React, { useEffect, useState } from 'react';
import CartShop from './components/CartShop';
import Header from './components/Header';
import Products from './components/Products';

import './app.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartAction, setCartAction] = useState('cart');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => response.json())
      .then(data => {
        const newSet = data.meals.map((product) => { return { ...product, price: 100 } });
        setProducts(newSet);
      });
      console.log('cargando .......');
  }, []);

  const handleClickCart = (id) => {
    const arrayDeleted = cart.filter((product) => product.idMeal === id)
    const newCart = cart.filter((product) => product.idMeal !== id)
    setCart(newCart);
    setTotal(total - arrayDeleted[0].quantity * arrayDeleted[0].price);
  };

  const handleClick = (e, id, units, setUnits, element) => {
    const selectProduct = products.filter((product) => product.idMeal === id);
    const checkProduct = cart.some((item) => (item.idMeal === id));
    if (!checkProduct) {
      setCart([...cart, { ...selectProduct[0], quantity: parseInt(units) }]);
      setUnits(1);
      setTotal(total + parseInt(units) * selectProduct[0].price);
      if (element.length != 0) {
        element.value = 1;
      }
    }
  }

  const handleClickBag = () => {
    const classActionBag = 'cart-action';
    setCartAction(classActionBag);
  }

  return (

    <div className="App">
      <Header handleClickBag={handleClickBag} cart={cart} total={total}/>
      <Products products={products} handleClick={handleClick} />
      <CartShop cart={cart} handleClickCart={handleClickCart} total={total} cartAction={cartAction} setCartAction={setCartAction}/>
    </div>

  );
}

export default App;