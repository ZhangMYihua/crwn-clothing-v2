import { createContext, useState, useEffect } from "react";

// this function increases the quantity of the item in the cart by one
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

// this function decreases the quantity of the item in the cart by one. If the quantity of an item is 1, the item will be filtered out of cartItems
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

// this function removes the item from the cart
const removeCartItem = (cartItems, cartItemToRemove) => {
  const updatedItems = cartItems.filter(item => item.id !== cartItemToRemove.id)
  return updatedItems;
}

// creating the Context object
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

// creating the Context component 
export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  // this effect will run when cartItems changes. The cartCount will change based on the items in the cart(cartItems)
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  // this effect will run when cartItems changes. The cartTotal will change based on the number of items in the cart (cartItems) and each item's price
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  // this function will increase the quantity of an item already in cart. Invokes addCartItem defined above
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  
  // this function will decrease the quantity of an item already in cart. Invokes subtractCartItem defined above
  const subtractItemFromCart = (cartItemToSubtract) => {
    setCartItems(subtractCartItem(cartItems, cartItemToSubtract))
  }

  // this function will removes an item from the cart. Invokes removeCartItem defined above
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  // creating a value object with properties and methods to be accessed by other components throughout the app
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