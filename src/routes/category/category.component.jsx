import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useSelector } from "react-redux";

import Spinner from '../../components/spinner/spinner.component'
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/category/category.selector';
import { selectCategoriesIsLoading } from '../../store/category/category.selector';

import {CategoryContainer, CategoryTitle}  from './category.styles.jsx'

const Category = ( {} ) => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return (
        <> 
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            { !isLoading ? (                
                <CategoryContainer>
                    {products &&
                        products.map(product=>
                            <ProductCard product={product} key={product.id}/>)
                    }
                </CategoryContainer> ) : (
                    <Spinner/>
                )
            }
        </>
    )
}

export default Category;