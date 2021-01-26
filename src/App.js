import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards')
      .then(response => response.json())
      .then(data => setProducts(data.cards));
  }, []);

  console.log(products);


  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
