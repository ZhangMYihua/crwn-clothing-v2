import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";
import Category from "../routes/category/category.components";
import { fetchCategoriesStart } from "../store/categories/category.action";
// import { getCategoriesAndDocuments } from "../utils/Firebase/firebase.utils";
// import { setCategories } from "../store/categories/category.action";



const Shop = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments();
    //   // console.log(categoriesMap)
    //   // console.log(categoriesArray)
    //   dispatch(setCategories(categoriesArray))
    // };

    // getCategoriesMap();



    dispatch(fetchCategoriesStart())
  }, []);


  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
  );
};

export default Shop;
