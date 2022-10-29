import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

//memo-ized selectors
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

//memo-ized selectors
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

//memo-ized selectors
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

//memo-ized selectors
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
