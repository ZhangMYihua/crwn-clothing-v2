import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToChouckoutHandler = () => {
        navigate('/checkout')
    }

    return ( 
        <div className='cart-dropdown-container'>
         <div className="cart-items">
          {cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))}
         </div>
         <Button onClick={goToChouckoutHandler}>CHECKOUT</Button>
        </div> );
}
 
export default CartDropDown;