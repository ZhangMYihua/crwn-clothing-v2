import React from 'react'
import ButtonFormComponents from '../ButtonForm/ButtonFormComponents'
import './DropDownMenuStyles.scss'

function DropDownMenu() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <ButtonFormComponents>CHECKOUT</ButtonFormComponents>
    </div>
  )
}

export default DropDownMenu
