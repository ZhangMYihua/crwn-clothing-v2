import {ReactComponent as Bagicon} from "../../Assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/Cart.context"
const CartIcon = () => {
  const {isCartOpen,setIsCartOpen}=useContext(CartContext)
  const handleClick=()=>setIsCartOpen(!isCartOpen);
 
  return (
    <div className='cart-icon-container' onClick={handleClick}>
        <Bagicon className="shopping-icon"/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon