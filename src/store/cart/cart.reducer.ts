import { AnyAction } from "redux";

import { CartItemsState } from "./cart.types";

import {
    setIsCartOpen,
    removeItemFromCart,
    clearItemFromCart,
    addItemToCart,
} from "./cart.action";

export const CART_INITIAL_STATE: CartItemsState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action = {} as AnyAction
): CartItemsState => {
    if (addItemToCart.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if (removeItemFromCart.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if (clearItemFromCart.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        };
    }
    return state;
};
