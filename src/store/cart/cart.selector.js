import { createSelector } from "reselect";




const selectCartReducer = (state) => state.cart

export const selectCartItems = createSelector(
[selectCartReducer],
(cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart)=> cart.isCartOpen
)




export const newTotal = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce(
        (total,item)=> total + (item.price * item.quantity) ,0)
)



export const newCount = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce(
    (total,item)=> total + item.quantity,0)
)

