import './style.css';
import ProductList from './components/productList/indexList';
import Cart from './components/cart/cart';
import ProductCard from './components/productCard/indexCard';
import React from "react";

const sampleProduct = {
  name: "Alpargata Clásica",
  price: 3500,
  imageUrl: "https://via.placeholder.com/150"
};

function App() {
  return (
    <div>
      <h1>Catálogo</h1>
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;
