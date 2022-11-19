import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if(existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  total: 0
});

export const CartProvider = ({ children }) => {
  const [isOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const result = cartItems.reduce((acc, curr) => acc += curr.quantity, 0);
    setTotal(result);
  }, [cartItems]);

  const value = { isOpen, setCartIsOpen, addItemToCart, cartItems, total };

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
}