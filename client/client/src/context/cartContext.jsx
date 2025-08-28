import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
    setCartItems([...cartItems, item]);
};

return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
    </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);
export default CartProvider;