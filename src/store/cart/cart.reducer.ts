import { AnyAction } from "redux";

import { CartState } from "./cart.types";

import { setIsCartOpen, setCartItems } from "./cart.action";

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action: AnyAction
): CartState => {
    if (setCartItems.match(action)) {
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
