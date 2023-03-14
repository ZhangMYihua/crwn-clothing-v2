import { CartItem, CART_ACTION_TYPES } from "./cart.types";
import {
    createAction,
    Action,
    ActionWithPayload,
    withMatcher,
} from "../../utils/reducer/reducer.utils";

const addCartItem = (
    cartItems: CartItem[],
    productToAdd: CartItem
): CartItem[] => {
    console.log(cartItems, productToAdd)
    const existingCartItem= cartItems.find(
        (cartItem: CartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem: CartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
    cartItems: CartItem[],
    cartItemToRemove: CartItem
): CartItem[] | [] => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem!.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem: CartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (
    cartItems: CartItem[],
    cartItemToClear: CartItem
): CartItem[] | [] =>
    cartItems.filter(
        (cartItem: CartItem): boolean => cartItem.id !== cartItemToClear.id
    );

// **********   Types *****************

export type SetIsCartOpen = ActionWithPayload<
    CART_ACTION_TYPES.SET_IS_CART_OPEN,
    boolean
>;

export type SetCartItems = ActionWithPayload<
    CART_ACTION_TYPES.SET_CART_ITEMS,
    CartItem[]
>;

// ********** Actions *****************************

export const setIsCartOpen = withMatcher(
    (boolean: boolean): SetIsCartOpen =>
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const addItemToCart = withMatcher(
    (cartItems: CartItem[], productToAdd: CartItem): SetCartItems => {
        console.log("action")
        const newCartItems = addCartItem(cartItems, productToAdd);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }
);

export const removeItemFromCart = withMatcher(
    (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }
);

export const clearItemFromCart = withMatcher(
    (cartItems: CartItem[], cartItemToClear: CartItem): SetCartItems => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }
);
