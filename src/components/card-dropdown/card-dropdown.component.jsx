
import { useContext} from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';




const CardDropdown = () => {
 
    const {cartItems} = useContext(CartContext);
 
    return(
<div className='cart-dropdown-container'>
<div className='cart-items'>
 { cartItems.map((item) =>( <CartItem key={item.id} CartItem={item}/>) )}
</div>
<Button>GO TO CHECKOUT </Button>
</div>
    )





}

export default CardDropdown;