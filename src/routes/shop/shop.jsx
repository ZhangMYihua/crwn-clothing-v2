import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories.preview';
import Category from '../category/category';
import { fetchCategoriesAsync } from '../../store/categories/category-action';
import { useDispatch } from 'react-redux'
import './shop.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchCategoriesAsync());
  }, []);

    return ( 
      <Routes>
       <Route index element={<CategoriesPreview />}/>
       <Route path=":category" element={<Category />}/>

      </Routes>
        );
}
 
export default Shop;