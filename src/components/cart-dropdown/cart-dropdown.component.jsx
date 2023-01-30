import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import {CartDropdownContainer, CartItemStyle, EmptyMessage} from './cart-dropdown.styles.jsx';


const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate()

    const goToCheckoutHandler = () =>{
        dispatch(setIsCartOpen());
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItemStyle>
                { cartItems.length ? (
                    cartItems.map((item)=>
                    <CartItem key={item.id} item={item} />
                    )) : (
                        <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                )}
            </CartItemStyle>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
};  

export default CartDropdown;