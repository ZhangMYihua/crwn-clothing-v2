import React from 'react'
import ButtonFormComponents from '../ButtonForm/ButtonFormComponents'
import './DropDownMenuStyles.scss'
import { useContext } from 'react'
import { OpenClose } from '../../Kontext/OpenCloseCardContext'
import CartItemInCart from '../CartIntemInCart/CartItemInCart'

function DropDownMenu() {
  const { cartItemInCart } = useContext(OpenClose)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemInCart.map((item) => (
          <CartItemInCart key={item.id} CartItemInCart={item} />
        ))}
      </div>
      <ButtonFormComponents>CHECKOUT</ButtonFormComponents>
    </div>
  )
}

export default DropDownMenu
