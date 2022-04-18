import { createSelector } from "reselect";
const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsDropdownOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isDropdownOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity * currentItem.price,
    0
  )
);

export const selectItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
