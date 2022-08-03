import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    cartCount: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    incItemQuantity: () => { },
    decItemQuantity: () => { },
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const updatedCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(updatedCartCount);
    }, [cartItems]);

    useEffect(() => {
        const updatedCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(updatedCartTotal);
    }, [cartItems])

    const addItemToCart = (itemToAdd) => {
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === itemToAdd.id
        );

        if (existingCartItem) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === itemToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
        }
    };

    const removeItemFromCart = (itemToRemove) => {
        const filteredCartItems = cartItems.filter(
            (cartItem) => itemToRemove.id !== cartItem.id
        );
        setCartItems(filteredCartItems);
    };

    const incItemQuantity = (itemToInc) => {
        itemToInc.quantity++;
        setCartItems([...cartItems]);
    };

    const decItemQuantity = (itemToInc) => {
        itemToInc.quantity--;
        setCartItems([...cartItems]);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        addItemToCart,
        removeItemFromCart,
        incItemQuantity,
        decItemQuantity,
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
