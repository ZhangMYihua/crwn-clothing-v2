import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


//import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // This was used once to set the collection of data/object to fireStore don't run it again
    // useEffect(() => {
    //  addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
      };
      getCategoriesMap();
    }, [])
    
    const value = {categoriesMap};
   return (
    <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
   )
}
