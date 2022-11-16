import { createContext, useState } from 'react';

const defaultState = {
  opened: false,
};

export const CartContext = createContext({
  data: null,
  setCartData: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(defaultState);
  const value = { data: { ...cartData }, setCartData };

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
}