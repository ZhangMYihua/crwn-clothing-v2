import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
    return ( 
      <div className="shop-container">
        {
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return <CategoryPreview key={key} title={key} products={products}></CategoryPreview>
          })
        }
      </div>
     );
}

export default Shop;