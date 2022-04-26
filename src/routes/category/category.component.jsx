import { useContext, useState, useEffect, Fragment } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';

import { properCapitalization } from '../../utils/javascript/string.utils';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{properCapitalization(category)}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;