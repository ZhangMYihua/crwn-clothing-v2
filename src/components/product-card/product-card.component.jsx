import { useDispatch, useSelector } from 'react-redux';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.actions';

import {ProductCardContainer, Footer} from './product-card.styles.jsx';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <Footer>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </Footer>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;