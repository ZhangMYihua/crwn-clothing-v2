import { createContext, useState } from 'react'

import DATA from '../../src/shop-data.json'

export const ShopItemContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(DATA)
  const value = { products }
  return (
    <ShopItemContext.Provider value={value}>{children}</ShopItemContext.Provider>
  )
}
