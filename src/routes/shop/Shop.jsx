import {Routes, Route} from 'react-router-dom'
import { CategoriesPreview } from '../categories-preview/CategoriesPreview';

import './shop.scss'

export const Shop = () => {
 
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route index element={<CategoriesPreview/>} />
    </Routes>
  )
};