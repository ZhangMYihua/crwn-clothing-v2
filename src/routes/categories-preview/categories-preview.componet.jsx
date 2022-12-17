import { useContext ,Fragment } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';

import CatergoryPreview from '../../components/category-preview/category-preview';

import { CategoriesContext } from '../../contexts/categories.context';



const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (

    <Fragment>
      {
        Object.keys(categoriesMap).map(title => {

          const products = categoriesMap[title];
          return (
            <CatergoryPreview key={title} title={title} products={products}/>
          )

        }
        )
      }
    </Fragment>
  );
};

export default CategoriesPreview;
