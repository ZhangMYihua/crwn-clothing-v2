import React from 'react'
import Button from '../button/Button'
import './cart-dropdown.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            <Button buttonType="outline">Go to checkout</Button>
        </div>
    </div>
  )
}

export default CartDropdown
