import { Route,Routes } from "react-router-dom"
import "./shop.scss"
import { Categoriespreview } from "../categories-preview/Categories-preview";
import Category from "../../component/Category/Category"
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/FireBase.utils";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../slices/CategoriesSlice";
export const Shop = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const getCategoriesMap=async()=>{
        const cat=await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(cat))
    }
    getCategoriesMap();
  },[dispatch])
  return (
    
      <Routes>
        <Route index element={<Categoriespreview/>}/>
        <Route path=":category" element={<Category/>}/>
      </Routes>
    
    
  );
}
