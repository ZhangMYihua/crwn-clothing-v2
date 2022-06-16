import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";
import CategoryPreview from "../../category-preview/category-preview.components";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </>
  );
};

export default CategoriesPreview;
