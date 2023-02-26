import { createContext, useState } from 'react'

export const OpenClose = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
})

export const OpenCloseProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const value = { isCartOpen, setIsCartOpen }
  return <OpenClose.Provider value={value}>{children}</OpenClose.Provider>
}