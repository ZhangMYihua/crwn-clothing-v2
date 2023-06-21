import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.type";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contain productToAdd.
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found increment quantity.

  if (existingProduct) {
    // If a existingProduct is found we want to return a new array of cardItems
    //  Map makes a new array so i had to be sure if the products match to add +1 or simply let the product whit not change
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? // this mean that we  have a brand new object but we spreading trough all of the old properties  but now just adding 1 to the "quantity"

          { ...cartItem, quantity: cartItem.quantity + 1 }
        : // If don't match just return the cartItem don't improve it...
          cartItem
    );
  }

  // return new array whit whit modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// How to reduce items from the cart ************************************very similar like the first code********

const removeCartItem = (cartItems, productToDecrease) => {
  // verify that the product we want to subtract is the same

  const matchProduct = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );

  // check if the quantity is equal to 1, if it is remove that item from the cart

  if (matchProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id);
  }

  // return a array whit cart items whit matching cart item and reduce quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearCartItems = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemsToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemsToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItems(cartItems, cartItemToClear);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean);
