

// import ProductCard from '../../components/product-card/product-card.component';
import CategoriesPreview from '../categories-preview/categories-preview.componet';

import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss';

const Shop = () => {
 

  return (

    <Routes>
      <Route index element={<CategoriesPreview/>}/>
    </Routes>
  );
};

export default Shop;
