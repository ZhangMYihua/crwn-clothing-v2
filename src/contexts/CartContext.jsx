import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const subtractCartItem = (cartItems, cartItemToSubtract) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToSubtract.id)
  if (existingCartItem.quantity === 1) {
    const updatedItems = cartItems.filter(item => item.id !== cartItemToSubtract.id)
    return updatedItems;
  } else {
    const updatedItems = cartItems.map(item => item.id === cartItemToSubtract.id 
      ? {...item, quantity: item.quantity - 1} 
      : item)
    return updatedItems;
  }
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const updatedItems = cartItems.filter(item => item.id !== cartItemToRemove.id)
  return updatedItems;
}

export const CartContext = createContext(
  {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    subtractItemFromCart: () => {},
    cartTotal: 0
  }
)

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  
  const subtractItemFromCart = (cartItemToSubtract) => {
    setCartItems(subtractCartItem(cartItems, cartItemToSubtract))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }


  const value={ 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    subtractItemFromCart, 
    removeItemFromCart, 
    cartItems, 
    cartCount, 
    cartTotal }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}