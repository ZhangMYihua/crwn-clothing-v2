import { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
});


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCOunt = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCOunt);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCardItem(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};