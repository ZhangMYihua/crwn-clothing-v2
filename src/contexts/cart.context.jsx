import { createContext, useState } from "react";

export const CartContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const value = { isDropdownOpen, setIsDropdownOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
