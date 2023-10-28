import './cart-dropdown.styles.scss';
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
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item)=>(
               <CartItem key={item.id} cartItem={item} /> 
            ))}
          <Button onClick={goToCheckout}>TO CHECKOUT</Button>
        </div>
    </div>
)
}

export default CartDropdown;