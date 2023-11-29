import { Route,Routes } from "react-router-dom"
import "./shop.scss"
import { Categoriespreview } from "../categories-preview/Categories-preview";
import Category from "../../component/Category/Category"

export const Shop = () => {
  return (
    
      <Routes>
        <Route index element={<Categoriespreview/>}/>
        <Route path=":category" element={<Category/>}/>
      </Routes>
    
    
  );
}
