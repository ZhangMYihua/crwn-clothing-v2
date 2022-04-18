import CART_ACTION_TYPES from "./cart.types";
export const CART_INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_DROPDOWN_OPEN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
