import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);

const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
};

const eliminarProducto = (id) => {
    setCarrito(carrito.filter(p => p.id !== id));
};

return (
    <CartContext.Provider value={{ carrito, agregarProducto, eliminarProducto }}>
        {children}
    </CartContext.Provider>
);
};