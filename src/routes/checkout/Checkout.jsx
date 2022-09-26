import { useContext } from 'react'
import './checkout.scss'
import { CheckoutItem } from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../contexts/CartContext'

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block' >
          <span>Product</span>
        </div>
        <div className='header-block' >
          <span>Description</span>
        </div>
        <div className='header-block' >
          <span>Quantity</span>
        </div>
        <div className='header-block' >
          <span>Price</span>
        </div>
        <div className='header-block' >
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}
      <span className='total'>Total: ${cartTotal} </span>
    </div>
  )
}