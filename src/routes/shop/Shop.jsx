import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.js';
import { CategoriesPreview } from '../categories-preview/CategoriesPreview';
import { Category } from '../category/Category';
import { setCategoriesMap } from '../../store/categories/category.action.js';

export const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // make async calls inside of useEffect cb 
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  )
};