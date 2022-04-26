import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { 
    CartDropdownContainer, 
    EmptyMessage, 
    CartItems 
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        setCart(false);
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