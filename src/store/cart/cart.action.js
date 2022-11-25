import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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

const clearCartItem = (cartItems, cartItemTOClear) => 
    cartItems.filter((item) => item.id !== cartItemTOClear.id);

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const clearItemFromCart = (cartItems, cartItemTOClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemTOClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}