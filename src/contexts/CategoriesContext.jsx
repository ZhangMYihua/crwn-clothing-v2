import { createContext, useState, useEffect } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js"
// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: [],
  // setProducts: () => null
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  
  // only needed this to run once to store data in Firebase
  useEffect(() => {
    // make async calls inside of useEffect cb 
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
  //   getCategoriesAndDocuments('categories', SHOP_DATA)
  }, [])
  const value = {categoriesMap}
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}