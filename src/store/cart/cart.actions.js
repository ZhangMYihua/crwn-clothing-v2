import { useDispatch } from "react-redux";

import { createAction } from "../../utils/reducer/reducer.util"
import CART_ACTION_TYPES from "./cart.types";

export const setIsCartOpen = () => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,{})
}

export const addItemToCart = (cartItems, productToAdd) => {
    const updatedCart = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedCart)
}

export const clearItemFromCart = (cartItems, itemToRemove) => {
    const updatedCart = clearItemCart(cartItems,itemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedCart)
}

export const removeItemFromCart = (cartItems, itemToChange) => {
    const updatedCart = removeCartItem(cartItems,itemToChange)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,updatedCart)
}

//////////////////////////////////////////////////////////////////////////////////////////
//Helper functions 
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