import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {CartContext} from "../../contexts/cart.context"
import { useContext } from "react";
import "./cartIcon.styles.scss";



const CartIcon =()=>{
const {isCartOpen,setIsCartOpen,itemsCount} = useContext(CartContext);
 
const toggleCartState = ()=> setIsCartOpen(!isCartOpen);
    
    return(
        <div className ="cart-icon-container" onClick={toggleCartState}>
            <ShoppingIcon className ="shopping-icon"/>
            <span className ="item-count">{itemsCount}</span>
        </div>
    )

}

export default CartIcon