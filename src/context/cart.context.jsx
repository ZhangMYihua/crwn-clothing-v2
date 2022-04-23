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

    return cartItems.filter(item => {
        return item.id !== existingCartItem.id
    });
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToRemove.id
    );

    if (!existingCartItem) return cartItems;

    if (existingCartItem.quantity === 1) {
        return clearCartItem(cartItems, productToRemove);
    }

    return cartItems.map(item => {
        return item.id === productToRemove.id ? 
            { ...productToRemove, quantity: existingCartItem.quantity - 1 } : 
            item
    });
};

export const CartContext = createContext({
    cart: false,
    setCart: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartAmount: 0,
    setCartAmount: () => {},
    cartTotal: 0,
    clearItemFromCart: () => {},
    clearCartItem: () => {},
    removeItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = productToAdd => {
        const newAmount = cartAmount + 1;
        const newTotal = cartTotal + productToAdd.price;
        setCartAmount(newAmount);
        setCartTotal(newTotal);
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const clearItemFromCart = productToClear => {
        const newAmount = cartAmount - productToClear.quantity;
        const newTotal = cartTotal - (productToClear.quantity * productToClear.price);
        setCartAmount(newAmount);
        setCartTotal(newTotal);
        setCartItems(clearCartItem(cartItems, productToClear));
    };

    const removeItemFromCart = productToRemove => {
        const newAmount = cartAmount - 1;
        const newTotal = cartTotal - productToRemove.price;
        setCartAmount(newAmount);
        setCartTotal(newTotal);
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const value = { 
        cart, 
        setCart, 
        addItemToCart, 
        cartItems, 
        cartAmount, 
        setCartAmount,
        cartTotal,
        setCartTotal,
        clearItemFromCart,
        removeItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};