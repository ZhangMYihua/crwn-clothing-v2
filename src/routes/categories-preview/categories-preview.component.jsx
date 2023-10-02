import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectIsLoading
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/';
import Spinner from '../../components/spinner/spinner.component';

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
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
    </>
  );
};
