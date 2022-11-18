import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () => navigate('/checkout');
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>
                <CartItem key={item.id} item={item} /> 
            )}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

        </div>
    )
};  

export default CartDropdown;