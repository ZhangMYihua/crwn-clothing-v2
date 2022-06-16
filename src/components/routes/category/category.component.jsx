import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
