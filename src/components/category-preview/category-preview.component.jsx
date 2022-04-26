import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { properCapitalization } from '../../utils/javascript/string.utils';

import ProductCard from '../../components/product-card/product-card.component';

import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from './category-preview.styles';

const CategoryPreview = ({ products, title }) => {
    const { cart, setCart } = useContext(CartContext);

    const exitCartDropdownMenu = () => setCart(false);

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={`/shop/${title}`} onClick={exitCartDropdownMenu}>{properCapitalization(title)}</Title>
            </h2>
            <Preview>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;