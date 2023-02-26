import './CartItemInCartStyles.scss'
import React from 'react'

function CartItemInCart({ CartItemInCart }) {
  const { name, imageUrl, price, quantity } = CartItemInCart
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItemInCart
