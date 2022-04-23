import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    cart: false,
    setCart: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartAmount: 0,
    setCartAmount: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

    const addItemToCart = productToAdd => {
        const newAmount = cartAmount + 1;
        setCartAmount(newAmount);
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { 
        cart, 
        setCart, 
        addItemToCart, 
        cartItems, 
        cartAmount, 
        setCartAmount 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};