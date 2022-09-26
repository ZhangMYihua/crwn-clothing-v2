import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productToAdd) => {
  const itemExists = cartItems.find(item => item.id === productToAdd.id)
  if (itemExists) {
    const updatedItems = cartItems.map(item => item.id === productToAdd.id 
      ? {...item, quantity: item.quantity + 1} 
      : item)
    return updatedItems;
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
}

export const CartContext = createContext(
  {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
  }
)

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(total);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd))
  }

  const value={ isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}