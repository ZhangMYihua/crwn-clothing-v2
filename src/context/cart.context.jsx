import { createContext, useState } from 'react';

export const CartContext = createContext({
    cart: false,
    setCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(false);
    const value = { cart, setCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};