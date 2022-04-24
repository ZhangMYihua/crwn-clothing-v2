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
};

const clearCartItem = (cartItems, productToClear) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToClear.id
    );

    if (!existingCartItem) return cartItems;

    return cartItems.filter(item => item.id !== existingCartItem.id);
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToRemove.id
    );

    if (!existingCartItem) return cartItems;

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingCartItem.id);
    }

    return cartItems.map(item => {
        return item.id === productToRemove.id ? 
            { ...productToRemove, quantity: existingCartItem.quantity - 1 } : 
            item
    });
};

export const CartContext = createContext({
    cart: false, setCart: () => {},
    cartItems: [], addItemToCart: () => {},
    cartAmount: 0, setCartAmount: () => {},
    cartTotal: 0, clearItemFromCart: () => {},
    clearCartItem: () => {}, removeItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = productToAdd => {
        setCartAmount(cartAmount + 1);
        setCartTotal(cartTotal + productToAdd.price);
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const clearItemFromCart = productToClear => {
        setCartAmount(cartAmount - productToClear.quantity);
        setCartTotal(cartTotal - (productToClear.quantity * productToClear.price));
        setCartItems(clearCartItem(cartItems, productToClear));
    };

    const removeItemFromCart = productToRemove => {
        setCartAmount(cartAmount - 1);
        setCartTotal(cartTotal - productToRemove.price);
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const value = { 
        cart, setCart, 
        cartItems, addItemToCart, 
        cartAmount, setCartAmount,
        cartTotal, setCartTotal,
        clearItemFromCart, removeItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};