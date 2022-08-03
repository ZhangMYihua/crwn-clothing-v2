import './Category.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className='category-container'>
            <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
            <div className='category'>
                {products &&
                    products.map(product => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category