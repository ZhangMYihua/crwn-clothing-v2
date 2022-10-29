import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)
    if (existingCartItem) {
       return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity+1} : item)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, cartItemTORemove) => {
    const existingCartItem = cartItems.find((item) => item.id === cartItemTORemove.id)
    if (existingCartItem.quantity === 1) {
       return cartItems.filter((item) => item.id !== cartItemTORemove.id)
    }
    return cartItems.map((item) => item.id === cartItemTORemove.id ? {...item, quantity: item.quantity - 1} : item)
}
const clearCartItem = (cartItems, cartItemTOClear) => cartItems.filter((item) => item.id !== cartItemTOClear.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemTOClear) => {
        setCartItems(clearCartItem(cartItems, cartItemTOClear))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, cartTotal, removeItemFromCart, clearItemFromCart}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};
