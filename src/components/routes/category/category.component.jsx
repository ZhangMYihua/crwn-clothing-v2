import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
