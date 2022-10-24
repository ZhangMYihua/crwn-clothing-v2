import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import { selectCartItems } from '../../store/cart/cart-selector';

const CartDropDown = () => {
    const cartItems  = useSelector(selectCartItems);
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