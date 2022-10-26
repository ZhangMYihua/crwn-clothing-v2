import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/category.selector";


export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  
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