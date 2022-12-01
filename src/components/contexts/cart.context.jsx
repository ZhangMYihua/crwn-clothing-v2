import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartCount: 0,
   cartTotal: 0
});

export const CartProvider = ({children}) => {

   const [isCartOpen, setIsCartOpen] = useState(false);

   const [cartItems, setCartItems] = useState([]);

   const [cartCount, setCartCount] = useState(0);

   const [cartTotal, setCartTotal] = useState(0);

   //every time the cart items array changes in any way, recalculate the cart count
   useEffect(() => {
      const newCartTotal = cartItems.reduce((total, cartItem) => {
         return total + (cartItem.quantity * cartItem.price);
      }, 0);

      setCartTotal(newCartTotal);

   }, [cartItems]);

   //every time the cart items array changes in any way, recalculate the cart count
   useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => {
         return total + cartItem.quantity;
      }, 0);

      setCartCount(newCartCount);

   }, [cartItems]);

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
   };

   const removeItemFromCart = (cartItemToRemove) => {
      const newCartItems = removeCartItem(cartItems, cartItemToRemove);
      setCartItems(newCartItems);
   };

   const clearItemFromCart = (cartItemToClear) => {
      const newCartItems = clearCartItem(cartItems, cartItemToClear);
      setCartItems(newCartItems);
   };

   const value = {
      isCartOpen, 
      setIsCartOpen, 
      addItemToCart, 
      cartItems, 
      cartCount,
      cartTotal,
      removeItemFromCart,
      clearItemFromCart,      
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const addCartItem = (cartItems, productToAdd) => {
   //find if cartItems contain productToAdd
   const existingCartItem = cartItems.find(
      cartItem => cartItem.id === productToAdd.id
   );

   //if found, increment quantity
   if(existingCartItem) {
      return cartItems.map(cartItem => 
         cartItem.id === productToAdd.id 
         ? {...cartItem, quantity: cartItem.quantity + 1} 
         : cartItem
      );
   }

   //return new array with modified cartItems/new cart item
   return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {

   const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
   if(existingCartItem) {
      existingCartItem.quantity--;

      if(existingCartItem.quantity === 0) {
         const newCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
         return [...newCartItems];
      }
   }

   return [...cartItems];
};

const clearCartItem = (cartItems, cartItemToClear) => {
   return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};