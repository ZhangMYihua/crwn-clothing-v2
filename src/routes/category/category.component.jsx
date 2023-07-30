import './category.styles.scss'
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';



const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  // works but is no good, const products = categoriesMap[category]; sinc it will happen everytime the0 ////component rerendes.
  
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
    
  return (
    <Fragment>
    <h2 className='cat-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
      {
        products && products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
    </Fragment>
  )
};

export default Category;