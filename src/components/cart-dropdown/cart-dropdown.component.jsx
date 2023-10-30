import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import Button from '../button/button.component'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item.components';

const CartDropdown = () =>{
    const {cartItems}=useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () =>{
        navigate('/checkout')
    }

return (
    <CartDropDownContainer>
        <CartItems>
            {cartItems.map((item)=>(
               <CartItem key={item.id} cartItem={item} /> 
            ))}
          <Button onClick={goToCheckout}>TO CHECKOUT</Button>
        </CartItems>
    </CartDropDownContainer>
)
}

export default CartDropdown;