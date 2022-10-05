import { createContext, useState, useEffect } from "react"

import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
  products: [],
  // setProducts: () => null
})

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const value = {products}
  
  useEffect(() => {
    
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}