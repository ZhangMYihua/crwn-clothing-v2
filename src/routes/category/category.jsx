import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category-selector';
import ProductCard from '../../components/product-card/product-card';
import Spinner from '../../components/spinner/spinner';
import { selectCategoriesIsLoading } from '../../store/categories/category-selector';
import './category.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const[products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {
          isLoading ? <Spinner /> : <div className='category-container'>
         {
            products && products.map((product) => <ProductCard key={product.id} product={product}/>)
         }
        </div>
        }
        </>
        
    )
    
}
 
export default Category;