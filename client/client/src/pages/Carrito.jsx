import { useCart } from '../context/cartContext';
import './carrito.css';

function Carrito() {
const { carrito, eliminarProducto } = useCart();

const total = carrito.reduce((acc, item) => acc + item.price, 0);

return (
    <div className="carrito-container">
        <h2>Tu carrito</h2>

        {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
        ) : (
        <>
        <div className="carrito-lista">
            {carrito.map((item) => (
                <div key={item.id} className="carrito-item">
                <img
                    src={item.img}
                    alt={item.name}
                    className="carrito-img"
                    onError={(e) => {
                    e.target.src = '/img/default.jpeg';
                }}
                />
                <div className="carrito-detalles">
                    <h5>{item.name}</h5>
                    <p>Categoría: {item.categoria}</p>
                    <p>Precio: ${item.price}</p>
                    <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(item.id)}
                >
                    Eliminar
                </button>
                </div>
            </div>
            ))}
        </div>

        <div className="carrito-resumen">
            <p>Total de productos: {carrito.length}</p>
            <p>Total a pagar: <strong>${total}</strong></p>
            <button className="btn btn-success">Finalizar compra</button>
        </div>
        </>
    )}
    </div>
);
}

export default Carrito;