

// import ProductCard from '../../components/product-card/product-card.component';
import CategoriesPreview from '../categories-preview/categories-preview.componet';

import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss';

import Category from '../../components/category/category.component';

const Shop = () => {
 

  return (

    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element = {<Category/>}/>
    </Routes>
  );
};

export default Shop;
