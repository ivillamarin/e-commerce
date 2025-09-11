import './card.css';

function ProductCard({ producto, onAgregar }) {
  if (!producto) return null;

  const { name, price, img, categoria } = producto;

  return (
    <div className="card">
      <img
        src={img}
        alt={name}
        className="card-img-top"
        onError={(e) => {
          e.target.src = '/img/default.jpeg'; // Fallback si la imagen no carga
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {categoria && <p className="card-text">Categoría: {categoria}</p>}
        <p className="card-text precio">${price}</p>
        <button className="btn btn-primary" onClick={onAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;