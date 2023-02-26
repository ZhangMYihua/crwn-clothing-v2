import { createContext, useState } from 'react'
import { useEffect } from 'react'

// add in v korzinu i increase quantity
const addCartItem = (cartItemInCart, productToAdd) => {
  const existingCartItem = cartItemInCart.find(
    (one) => one.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItemInCart.map((one) =>
      one.id === productToAdd.id ? { ...one, quantity: one.quantity + 1 } : one
    )
  }
  return [...cartItemInCart, { ...productToAdd, quantity: 1 }]
}

// CartContext
export const OpenClose = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemInCart: [],
  addCartItemInCart: () => { },
  cartCount: 0,
})

export const OpenCloseProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItemInCart, setCartItemInCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItemInCart.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItemInCart])

  const addCartItemInCart = (productToAdd) => {
    setCartItemInCart(addCartItem(cartItemInCart, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, addCartItemInCart, cartItemInCart, cartCount }

  return <OpenClose.Provider value={value}>{children}</OpenClose.Provider>
}
