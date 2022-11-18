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

const clearItemCart = (cartItems,itemToRemove) => {
    return cartItems.filter( item => item!==itemToRemove)
};

const removeCartItem = (cartsItem,cartItemToRemove) =>{
    const existingCartItem = cartsItem.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

    if (existingCartItem.quantity==1) return cartsItem.filter(item=>item!==cartItemToRemove)
    
    return cartsItem.map( item => {
        if (item.id === cartItemToRemove.id) item.quantity-=1
        return item
    });
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartItemCount: 0,
    cartTotal:0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( () => {
        setCartItemCount(cartItems.reduce((count,item)=>{return count+=item.quantity},0))
        setCartTotal(cartItems.reduce( (total, item) => {return total += item.quantity*item.price},0 ))
    }, [cartItems] )

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const clearItemFromCart = (itemToRemove) => {
        setCartItems(clearItemCart(cartItems,itemToRemove))
    }

    const removeItemFromCart = (itemToChange, val) => {
        setCartItems(removeCartItem(cartItems,itemToChange,val))
    }

    const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartItemCount, removeItemFromCart, clearItemFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}