import { useContext} from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";


export const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  
  return (
    <>
    {
      Object.keys(categoriesMap).map(category => {
        const products = categoriesMap[category]
        return <CategoryPreview key={category} category={category} products={products} />
      })
    }
    
    </>
  )
};