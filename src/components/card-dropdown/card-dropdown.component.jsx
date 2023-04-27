
import { useContext} from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {useNavigate } from 'react-router-dom';




const CardDropdown = () => {
 
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {  navigate('/checkout');}
      
 
    
    return(
<div className='cart-dropdown-container'>
<div className='cart-items'>
 { cartItems.map((item) =>( <CartItem key={item.id} CartItem={item}/>) )}
</div>

<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT </Button>


</div>
    )





}

export default CardDropdown;