import {ReactComponent as Bagicon} from "../../Assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

import { useSelector,useDispatch } from "react-redux"
import { setIsCartOpen } from "../../slices/cartSlice"
const CartIcon = () => {
  const dispatch=useDispatch();
  const {cartCount,isCartOpen}=useSelector((state)=>state.cart)
  const handleClick=()=>dispatch(setIsCartOpen(!isCartOpen));
  
 
  return (
    <div className='cart-icon-container' onClick={handleClick}>
        <Bagicon className="shopping-icon"/>
        <span className='item-count' >{cartCount}</span>
    </div>
  )
}

export default CartIcon