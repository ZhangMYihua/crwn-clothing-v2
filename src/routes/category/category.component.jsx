import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { CategoryContext } from '../../contexts/category.context';
import ProductCard from '../../components/product-card/product-card.component';

import {CategoryContainer, CategoryTitle}  from './category.styles.jsx'

const Category = ( {} ) => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoryContext);
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