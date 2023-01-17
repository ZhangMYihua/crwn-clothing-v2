import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
    );

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cart)=>cart.reduce((acc,item) =>{
        return acc + item.price*item.quantity
    },0)
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cart) => cart.reduce((acc,item) => acc + item.quantity ,0)
    );