import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles.jsx'
import { Button } from '../button/Button'
import { CartItem } from '../cart-item/CartItem'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

const goToCheckoutHandler = () => {
  navigate('/checkout')
}

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItemsContainer>
        <Button onClick={goToCheckoutHandler} >Go to checkout</Button>
    </CartDropdownContainer>
  )
}