import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems((oldCartItems) => {
      const newCartItems = addCartItem(oldCartItems, productToAdd);
      return newCartItems;
    });
  };

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cartItems, itemCount]);

  const value = {
    isDropdownOpen,
    setIsDropdownOpen,
    addItemToCart,
    cartItems,
    itemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
