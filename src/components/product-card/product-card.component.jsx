import { useDispatch, useSelector } from "react-redux"; 
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import './product-card.styles.scss';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCard = () => dispatch(addItemToCart(cartItems, product));
    return ( 
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted}  onClick={addProductToCard}>Add to card</Button>
        </div>
     );
}

export default ProductCard;