import { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../shop-data.js'; // firebase 에 업로드하는데 사용된 js 파일 

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'; //firebase에 업로드하는데 사용된 js 파일 

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);

  useEffect(() => {

    const getCategoriesMap = async () => {
      const categoryMap  = await getCategoriesAndDocuments();

      console.log(categoryMap);

      setCategoriesMap(categoryMap);
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
