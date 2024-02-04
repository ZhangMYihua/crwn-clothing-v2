import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.componet';
import Category from '../category/category.component';


import {ShopPageContainer} from './shop.styles';

const Shop = () => {
    
    return (
        <ShopPageContainer>
          <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
          </Routes>
        </ShopPageContainer>
        );
      };

export default Shop;