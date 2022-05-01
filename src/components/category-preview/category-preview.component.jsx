import { useDispatch } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { properCapitalization } from '../../utils/javascript/string.utils';

import ProductCard from '../../components/product-card/product-card.component';

import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from './category-preview.styles';

const CategoryPreview = ({ products, title }) => {
    const dispatch = useDispatch();

    const exitCartDropdownMenu = () => dispatch(setIsCartOpen(false));

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