import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const totalCartItems = (cartItems) => {
  return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
};

const totalCartPrice  = (cartItems) => {
  return cartItems.reduce((total , cartItem) => total + cartItem.price * cartItem.quantity, 0)
}



const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)


const removeCartItem =(cartItems, cartItemToRemove) => {
  
  
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );


  if(existingCartItem.quantity === 1){
    return clearCartItem(cartItems , cartItemToRemove)
  }


  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  



}




export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart : () => {}, 
  clearItemFromCart : () => {},
  totalQuantity: 0, // cart-count
  totalPrice : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalQuantity(totalCartItems(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(totalCartPrice(cartItems))
  }, [cartItems])


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };



  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
