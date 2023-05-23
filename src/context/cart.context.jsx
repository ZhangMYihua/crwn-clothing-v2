import { createContext, useReducer } from "react";
import { createAction } from "../utils/firebase/reducer/reducer.utils";

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

const reduceCartItem = (cartItems, productToDecrease) => {
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

const deletingProduct = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  reduceItemsToCart: () => {},
  deleteProduct: () => {},
  cartCounts: 0,
  totalPrice: 0,
});

// *****************************************************Using Reducers****************************************************
// **only includes readable values**

const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCounts: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTIONS_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCounts, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  //   ******* Handler Function **********
  const updateCartItems = (newCartItems) => {
    //generate newCartCount
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    // generate newCartTotal
    const totalPriceValor = newCartItems.reduce(
      (finalP, cardItem) => finalP + cardItem.price * cardItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCounts: newCartCount,
        totalPrice: totalPriceValor,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIONS_TYPES.SET_CART_OPEN, bool));
  };

  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const reduceItemsToCart = (productToDecrease) => {
    const newCartItems = reduceCartItem(cartItems, productToDecrease);
    updateCartItems(newCartItems);
  };

  const deleteProduct = (productToDelete) => {
    const newCartItems = deletingProduct(cartItems, productToDelete);
    updateCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCounts,
    totalPrice,
    reduceItemsToCart,
    deleteProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
