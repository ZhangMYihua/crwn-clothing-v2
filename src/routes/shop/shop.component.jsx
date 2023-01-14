import { Routes, Route,Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'; 

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';
import { CategoryProvider } from '../../contexts/category.context';
import { setCategoryMap } from '../../store/category/category.actions'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategoryMap(categoryMap))
        }
        getCategoriesMap();
      }, [dispatch]);

    return (
        <CategoryProvider> 
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=':category' element={<Category/>}/>
            </Routes>
        </CategoryProvider>
    )
}

export default Shop;