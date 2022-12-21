import { Fragment } from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
