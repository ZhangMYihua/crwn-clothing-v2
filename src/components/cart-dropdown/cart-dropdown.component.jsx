import { useContext }from 'react';
import { useNavigate }from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import {CartDropdownContainer, CartItemsContainer, EmptyMessage} from './cart-dropdown.styles';
import { CartContext } from '../../context/cart.context';

const CartDropdown=()=> {
  const { cartItems } = useContext(CartContext);
  const navigate=useNavigate();
  const goToCheckoutHandler= () => {
    navigate('/checkout')
  }
  return (
  <CartDropdownContainer > 
   <CartItemsContainer> {
        cartItems.length ? cartItems.map((item)=> (
      <CartItem key= { item.id } cartItem= { item }
          />)) : <EmptyMessage> Your cart is empty </EmptyMessage>
      }
   </CartItemsContainer> 
    <Button onClick= {
      goToCheckoutHandler
    }
    >GO TO CHECKOUT</Button> 
  </CartDropdownContainer>)
}

export default CartDropdown