import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.componet';
import Directory from '../../components/directory/directory.component';
import {ShopPageContainer} from './shop.styles';

const Shop = () => {
    
    return (
        <ShopPageContainer>
          <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Directory/>} />
          </Routes>
        </ShopPageContainer>
        );
      };

export default Shop;