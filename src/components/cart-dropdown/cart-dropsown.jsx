import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);

    return ( 
        <div className='cart-dropdown-container'>
         <div className="cart-items">
          {cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))}
         </div>
         <Button>CHECKOUT</Button>
        </div> );
}
 
export default CartDropDown;