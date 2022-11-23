import { useContext } from 'react';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import {ProductCardContainer, Footer} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const handler = (event) => {
        addItemToCart(product)
    }
    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <Footer>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </Footer>
            <Button onClick={handler} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart...ANNA</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;