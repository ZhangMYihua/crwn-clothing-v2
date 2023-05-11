
import { useContext} from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import {useNavigate } from 'react-router-dom';
import{CartDropdownContainer,EmptyMessage,CartItemsContainer} from './card-dropdown.styles.jsx';




const CardDropdown = () => {
 
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {  navigate('/checkout');}
      
 
    
    return(
    <CartDropdownContainer>
    <CartItemsContainer>
    {  cartItems.length ? (
        cartItems.map((item) =>( <CartItem key={item.id} CartItem={item}/>)) ) : (
            <EmptyMessage>Your cart is empty </EmptyMessage>
        )
        }
    </CartItemsContainer>

    <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT </Button>  


    </CartDropdownContainer>
    )

}

export default CardDropdown;