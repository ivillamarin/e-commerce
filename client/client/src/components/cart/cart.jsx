import { useCart } from '../../context/cartContext.jsx';

function Cart() {
const { carrito } = useCart();

return (
    <div className="cart">
        <h2>Carrito</h2>
        {carrito.length === 0 ? (
    <p>Tu carrito está vacío.</p>
) : (
    <div>
    {carrito.map((item, index) => (
        <div key={index}>
            <p>{item.name} - ${item.price}</p>
        </div>
    ))}
    </div>
)}
    </div>
);
}

export default Cart;