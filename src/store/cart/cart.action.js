import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd

  const isProductInCart = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  if (isProductInCart) {
    return cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};
const clearItemFromCart = (cartItems, cartItem) => {
  return cartItems.filter((item) => item.id !== cartItem.id);
};

const decreaseCartItem = (cartItems, cartItem) => {
  // map over cart, find the item in the cart
  // if product quantity is 1, remove the product from the cart
  if (cartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItem.id);
  } else {
    return cartItems.map((item) => {
      if (item.id === cartItem.id)
        return { ...item, quantity: cartItem.quantity - 1 };
      return item;
    });
  }
};

export const setIsDropdownOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_DROPDOWN_OPEN, bool);

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, cartItem) => {
  const newCartItems = clearItemFromCart(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseItemInCart = (cartItems, cartItem) => {
  const newCartItems = decreaseCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
