import { ShoppingCartContext } from '../../context/shoppingCart.context';
import { useContext } from 'react';
import Button from '../button/button.component';
    import './cart-dropdown.styles.scss';
    
    const CartDropdown = () => {
        const { Items } = useContext(ShoppingCartContext);
        return (
            <div className='cart-dropdown-container'>
                <div className='cart-item' />
                <Button>GO TO CHECKOUT</Button>
            </div>
            ) 
        }
        
        export default CartDropdown
        