import { CART_ACTION_TYPES, CartItem } from "./cart-types";
import { CategoryItem } from "../categories/category-types";
import { createAction, withMatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer';


const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
  );
  
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
     cartItem.id === productToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }

  return [ ...cartItems, { ...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(
          (cartItem) => cartItem.id === cartItemToRemove.id
    );
    
    if (existingCartItem && existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map((cartItem) => 
     cartItem.id === cartItemToRemove.id
     ? { ...cartItem, quantity: cartItem.quantity - 1 }
     : cartItem
     );
  };

const clearCartITem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => 
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, Boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

  


export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => 
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => 
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

  export const addItemToCart = (cartItems: CartItem[] ,productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems)
  }
  export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems)
  }
  export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartITem(cartItems, cartItemToClear);
    return setCartItems(newCartItems)
  }