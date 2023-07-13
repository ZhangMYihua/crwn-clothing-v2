// import {  useContext } from "react";
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
// import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return(
            <CategoryPreview key = {title} title = {title} products = {products}/>
        )
      }
        
      )}
    </>
  );
};

export default CategoriesPreview;
