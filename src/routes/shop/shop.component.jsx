import CategoriesPreview from '../categories-preview/categories-preview.component';
import { Route,Routes } from 'react-router-dom';
import Category from '../category/category.component';
import './shop.styles.scss';



const Shop = ()=>{
 

 return (
   <Routes>
    <Route index={true} element={<CategoriesPreview/>}/>
    <Route path=":category" element={<Category/>}/>
   </Routes>
 )




}


export default Shop;