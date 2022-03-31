import { createContext, useState, useEffect } from "react";const addCartItem = (cartItems, productToAdd) => {
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

const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity * currentItem.price,
    0
  );

export const CartContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  removeItem: () => {},
  decreaseItemInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getTotal = (cartItems) => {
    if (cartItems.length > 0) setCartTotal(getCartTotal(cartItems));
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItem = (cartItem) => {
    setCartItems(clearItemFromCart(cartItems, cartItem));
  };

  const decreaseItemInCart = (cartItem) => {
    setCartItems(decreaseCartItem(cartItems, cartItem));
  };

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cartItems, itemCount]);

  useEffect(() => {
    getTotal(cartItems);
  }, [cartItems, cartTotal]);

  const value = {
    isDropdownOpen,
    setIsDropdownOpen,
    addItemToCart,
    cartItems,
    itemCount,
    removeItem,
    decreaseItemInCart,
    getTotal,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
