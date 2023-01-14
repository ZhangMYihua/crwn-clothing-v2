import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useSelector } from "react-redux";

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategories } from '../../store/category/category.selector';

import {CategoryContainer, CategoryTitle}  from './category.styles.jsx'

const Category = ( {} ) => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return (
        <> 
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map(product=>
                        <ProductCard product={product} key={product.id}/>)
                }
            </CategoryContainer>
        </>
    )
}

export default Category;