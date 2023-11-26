import {ReactComponent as Bagicon} from "../../Assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/Cart.context"
const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
  const handleClick=()=>setIsCartOpen(!isCartOpen);
  
 
  return (
    <div className='cart-icon-container' onClick={handleClick}>
        <Bagicon className="shopping-icon"/>
        <span className='item-count' >{cartCount}</span>
    </div>
  )
}

export default CartIcon