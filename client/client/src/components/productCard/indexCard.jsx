// client/src/components/ProductCard/indexCard.jsx

import React from "react";
import "./card.css";
import { useCart } from "../../context/cartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;