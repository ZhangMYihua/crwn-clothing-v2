import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = ()=>{



    return(

        <Routes>
            <Route index element={<CategoriesPreview /> }></Route>
            <Route path=":category" element={<Category /> }></Route>
        </Routes>
    ); 
};

export default Shop;