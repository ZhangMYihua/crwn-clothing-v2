import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import './product-card.styles.jsx';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </ProductCartContainer>
    );
}

export default ProductCard;