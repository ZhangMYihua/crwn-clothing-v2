import { createContext, useState, useEffect } from "react"

import shopData from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  // setProducts: () => null
})

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(shopData);
  const value = {products}
  
  useEffect(() => {
    
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}