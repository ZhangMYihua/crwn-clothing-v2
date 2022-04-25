import { Fragment } from 'react';

import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';

import { properCapitalization } from '../../utils/javascript/string.utils';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{properCapitalization(category)}</h2>
            <div className='category-container'>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    );
}

export default Category;