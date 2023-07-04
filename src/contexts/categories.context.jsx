import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/Firebase/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/Firebase/firebase.utils.js";
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  //   setProducts: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments('categories' , SHOP_DATA)
  // } , [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap)
      setCategoriesMap(categoriesMap)
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
