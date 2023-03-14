import { createSelector } from "reselect";
import { CartItemsState, CartItem } from "./cart.types";

const selectCartReducer = (state: any): CartItemsState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart): CartItem[] => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart): boolean => cart.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems:CartItem[]): number =>
        cartItems.reduce(
            (total: number, cartItem: CartItem): number =>
                total + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems): number =>
        cartItems.reduce(
            (total: number, cartItem: CartItem): number =>
                total + cartItem.quantity * cartItem.price,
            0
        )
);
