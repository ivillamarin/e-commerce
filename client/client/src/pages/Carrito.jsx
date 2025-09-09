import { useCart } from '../context/cartContext';
import './carrito.css';

function Carrito() {
const { carrito, eliminarProducto } = useCart();

const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

return (
    <section className="carrito-container">
        <h2>Tu carrito</h2>
        {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
    ) : (
        <div className="carrito-lista">
            {carrito.map((producto) => (
            <div key={producto.id} className="carrito-item">
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
            </div>
        ))}
        <div className="carrito-total">
            <h3>Total: ${total}</h3>
        </div>
        </div>
    )}
    </section>
);
}

export default Carrito;