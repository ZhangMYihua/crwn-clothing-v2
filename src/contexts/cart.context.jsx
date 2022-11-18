import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const cartItemExist = cartItems.find((cartItem)=>
        cartItem.id === productToAdd.id
    )

    if (cartItemExist) {
        return cartItems.map(cartItem => {
            if (cartItem.id === productToAdd.id){
                cartItem.quantity += 1
            }
            return cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity:1 }];
}; 

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartItemCount: 0,
    setCartItemCount:()=>{},
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect( () => {
        setCartItemCount(cartItems.reduce((count,item)=>{return count+=item.quantity},0))
    }, [cartItems] )

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartItemCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}