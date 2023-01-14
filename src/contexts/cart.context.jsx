import { createContext, useState, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.util";

const addCartItem = (cartItems, productToAdd) => {
    const cartItemExist = cartItems.find((cartItem)=>
        cartItem.id === productToAdd.id
    );

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
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartItemCount: 0,
    cartTotal:0
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0,
    cartTotal:0
}

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN : "SET_IS_CART_OPEN",
    SET_CART_ITEM : "SET_CART_ITEM",
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
}

const cartReducer = (state, action) => {
    const { type,payload } = action
    switch(type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state, 
                isCartOpen: !state.isCartOpen
            }
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartItemCount: payload
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return{
                ...state,
                ...payload,
            }
        default:
            throw new Error(`Unhandled Type ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    // USE STATE WAY OF DOING IT
    // const [cartItems, setCartItems] = useState([]);
    // const [cartItemCount, setCartItemCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    //REDUCER WAY OF DOING IT
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { cartItems, cartItemCount, cartTotal } = state

    const updateCartItemReducer = (cartItems) => {
        const newCartItemCount = cartItems.reduce((count,item)=>{return count+=item.quantity},0)
        const newCartTotal = cartItems.reduce( (total, item) => {return total += item.quantity*item.price},0)
        const payload = {
            cartItems,
            cartItemCount: newCartItemCount,
            cartTotal: newCartTotal
        }
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEM,payload));
    }

    const addItemToCart = (productToAdd) => {
        const updatedCart = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(updatedCart)
    }

    const clearItemFromCart = (itemToRemove) => {
        const updatedCart = clearItemCart(cartItems,itemToRemove)
        updateCartItemReducer(updatedCart)
    }

    const removeItemFromCart = (itemToChange) => {
        const updatedCart = removeCartItem(cartItems,itemToChange)
        updateCartItemReducer(updatedCart)
    }

    const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartItemCount, removeItemFromCart, clearItemFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}