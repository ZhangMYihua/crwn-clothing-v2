// import CategoriesPreview from "../../categories-preview/Categories-preview.component";
// import {Routes, Route} from "react-router-dom";
// import Category from "../category/Category.component";


// // import {useDispatch} from 'react-redux';
// // import { useEffect } from "react";


// // import { setCategoriesMap } from "../../../store/categories/category.action"
// // import {getCategoriesAndDocuments} from "../../../utils/firebase/firebase.utils";

// const Shop = ()=>{
//     // const dispatch = useDispatch();

//     // useEffect(()=>{
//     //     const getCategoriesMap = async()=>{
//     //         const categoriesMap = await getCategoriesAndDocuments('categories');
//     //         dispatch(setCategoriesMap(categoriesMap));
            
//     //     }
        
//     //     getCategoriesMap();
//     // },[])  
  
    
//     return(
//         <Routes>
//             <Route index element = {<CategoriesPreview/>}/> 
//             <Route path=":category" element = {<Category/>}/> 
            
//         </Routes>
//     )

// }

// export default Shop;





import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';
import { fetchCategoriesAsync } from '../../../store/categories/category.action';
import { setCategories } from '../../../store/categories/category.action';

import CategoriesPreview from '../../categories-preview/Categories-preview.component';
import Category from '../category/Category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => 
    
      dispatch(fetchCategoriesAsync())
    

    
  , []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;