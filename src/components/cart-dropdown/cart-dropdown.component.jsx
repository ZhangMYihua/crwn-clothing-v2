import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems 
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false));
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length !== 0 ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;