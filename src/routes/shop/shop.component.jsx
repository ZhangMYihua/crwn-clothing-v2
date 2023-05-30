import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

const Shop = () => {
  // Moving Redux Reducers
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index={true} element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
