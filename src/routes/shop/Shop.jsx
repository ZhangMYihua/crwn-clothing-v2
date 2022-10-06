import {Routes, Route} from 'react-router-dom'
import { CategoriesPreview } from '../categories-preview/CategoriesPreview';
import { Category } from '../category/Category';

import './shop.scss'

export const Shop = () => {
 
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  )
};