import { useCart } from '../../context/cartContext.jsx';

function Cart() {
const { cartItems } = useCart();

return (
    <div className="cart">
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
    ) : (
        cartItems.map((item, index) => (
            <div key={index}>
                <p>{item.name} - ${item.price}</p>
            </div>
        ))
)}
    </div>
);
}

export default Cart;