import { useContext } from 'react'
import './checkout.styles.jsx'
import { CheckoutItem } from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutContainer, CheckoutHeader, Total, HeaderBlock } from './checkout.styles'

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock >
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}
      <Total>Total: ${cartTotal} </Total>
    </CheckoutContainer>
  )
}