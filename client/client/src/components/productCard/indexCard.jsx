import './card.css';

function ProductCard({ producto, onAgregar }) {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={onAgregar}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;