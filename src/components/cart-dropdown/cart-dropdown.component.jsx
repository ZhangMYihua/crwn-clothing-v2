import { ShoppingCartContext } from '../../context/shoppingCart.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';


import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';
    
    const CartDropdown = () => {
        const { cartItems } = useContext(CartContext);    
        return (
            <div className='cart-dropdown-container'>
                <div className='cart-items'>
                  {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))}  
                </div>
                <Button>GO TO CHECKOUT</Button>
            </div>
            ) 
        }
        
        export default CartDropdown
        