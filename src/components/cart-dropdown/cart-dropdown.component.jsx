import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer, CartItemStyle, EmptyMessage} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () =>{
        setIsCartOpen(false);
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