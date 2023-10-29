import './shop.styles.scss';
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Shop = ()=>{



    return(

        <Routes>
            <Route index element={<CategoriesPreview /> }></Route>
        </Routes>
    ); 
};

export default Shop;