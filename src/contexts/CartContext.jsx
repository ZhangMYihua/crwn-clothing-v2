import { createContext, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  const itemExists = cartItems.find(item => item.id === productToAdd.id);
  if (itemExists) {
    const updatedItems = cartItems.map(item => {
      return item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item;
    })
    return updatedItems
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
}

export const CartContext = createContext(
  {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
  }
)

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd))
  }

  const value={isCartOpen, setIsCartOpen, addItemToCart, cartItems}
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

// determine if cartItems contains productToAdd
  // const itemInCart = cartItems.find((item) => item.id === productToAdd.id)
  // // if found, increase quantity by 1
  // if (itemInCart) {
  //   const updatedItems = cartItems.map(item => (
  //     item.id === productToAdd.id
  //     ? {...item, quantity: item.quantity + 1}
  //     : item
  //   ))
  //   return updatedItems;
  // } else {
  //   return [...cartItems, {...productToAdd, quantity: 1}]
  // }