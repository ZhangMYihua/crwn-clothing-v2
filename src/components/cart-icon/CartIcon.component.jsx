import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {CartContext} from "../../contexts/cart.context"
import { useContext } from "react";
import {IconContainer,ItemsCount} from "./cartIcon.styles.jsx";



const CartIcon =()=>{
const {isCartOpen,setIsCartOpen,itemsCount} = useContext(CartContext);
 
const toggleCartState = ()=> setIsCartOpen(!isCartOpen);
    
    return(
        <IconContainer onClick={toggleCartState}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemsCount>{itemsCount}</ItemsCount>
        </IconContainer>
    )

}

export default CartIcon