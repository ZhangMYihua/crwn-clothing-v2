import { createContext, useReducer } from 'react';

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
    cart: false, setCart: () => { },
    cartItems: [], addItemToCart: () => { },
    cartAmount: 0, setCartAmount: () => { },
    cartTotal: 0, clearItemFromCart: () => { },
    clearCartItem: () => { }, removeItemFromCart: () => { }
});

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_STATE: 'SET_CART_STATE'
}

const INITIAL_STATE = {
    cart: false,
    cartItems: [],
    cartAmount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_CART_STATE:
            return {
                ...state,
                cart: payload
            }
        default:
            throw new Error(`ERR: UNHANDLED TYPE OF "${type}" IN CART_REDUCER`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, cart, cartTotal, cartAmount }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = newCartItems => {
        const newCartAmount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        dispatch({ 
            type: CART_ACTION_TYPES.SET_CART_ITEMS, 
            payload: { 
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartAmount: newCartAmount 
            } 
        });
    };

    const setCartReducer = cartState => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: cartState
        });
    };

    const addItemToCart = productToAdd => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = productToClear => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = productToRemove => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const value = { 
        cart, setCart: setCartReducer, 
        cartItems, addItemToCart, 
        cartAmount, cartTotal,
        clearItemFromCart, removeItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};