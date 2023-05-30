import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../components/products-card/products-card.component";
import { CategoriesContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoriesContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesContainer>
    </Fragment>
  );
};

export default Category;
