import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd)=>{
    const existingItem = cartItems.find((item)=> item.id === productToAdd.id);
    if(existingItem){
        return cartItems.map((item)=>
            item.id === productToAdd.id 
            ? {...item, quantity: item.quantity+1} 
            : item
        )
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}];
    
}
const removeCartItem = (cartItems, productToRemove)=>{
    const existingItem = cartItems.find((item)=> item.id === productToRemove.id);
    
    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((item)=>
            item.id === productToRemove.id 
            ? {...item, quantity: item.quantity - 1} 
            : item
        )

}
const clearCartItem = (cartItems, productToClear)=>cartItems.filter(cartItem => cartItem.id !== productToClear.id);



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : ()=>{} ,
    cartItems: [],
    addItemToCart : () =>{},
    removeItemFromCart: () =>{},
    clearItemsFromCart : () =>{},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const[cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>total + cartItem.quantity, 0);

        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0);

        setCartTotal(newCartTotal);
        
    }, [cartItems])


    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) =>{
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart = (productToClear) =>{
        setCartItems(clearCartItem(cartItems, productToClear))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}