import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //Find if the product has already been added
  const productExists = cartItems.find((item) => item.id === productToAdd.id);

  //if the product has already been added
  if (productExists) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  //this manage if it's a new product
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  total: 0,
  removeItem: () => {},
  clearCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setTotal(newTotal);
    setCartCount(newCartCount);
  }, [cartItems, cartCount]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItem(addCartItem(cartItems, productToAdd));

  const removeItem = (productToRemove) =>
    setCartItem(removeItemFromCart(cartItems, productToRemove));

  const clearCartItem = (productToRemove) =>
    setCartItem(clearCartItemFromCart(cartItems, productToRemove));

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    total,
    setCartCount,
    removeItem,
    clearCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
