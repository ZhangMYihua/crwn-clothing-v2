import { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import { setCategoriesMap } from '../store/categories/categories.action';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);

  return <CategoriesContext.Provider>{children}</CategoriesContext.Provider>;
};
