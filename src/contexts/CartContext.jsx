import { createContext, useState } from "react";

export const CartContext = createContext({
	cartIsOpen: false,
	cartItems: [],
	setCartIsOpen: () => null,
	setCartItems: () => null
});

export const CartProvider = ({ children }) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const value = { cartIsOpen, cartItems, setCartIsOpen, setCartItems };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
