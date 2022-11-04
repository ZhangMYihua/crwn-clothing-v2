import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector"
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
    return ( 
      <Fragment>
        {
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return <CategoryPreview key={key} title={key} products={products}></CategoryPreview>
          })
        }
      </Fragment>
     );
}

export default CategoriesPreview;