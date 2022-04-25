import { Link } from 'react-router-dom';

import { properCapitalization } from '../../utils/javascript/string.utils';

import ProductCard from '../../components/product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ products, title }) => {
    return (
        <div className='category-preview-container'>
            <Link className='title' to={`/shop/${title}`}>{properCapitalization(title)}</Link>
            <div className='preview'>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryPreview;