import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
// import {CartContext} from "../../contexts/cart.context"
// import { useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setIsCartOpen} from "../../store/cart/cart.action"
import {selectIsCartOpen,newCount} from '../../store/cart/cart.selector'

import {IconContainer,ItemsCount} from "./cartIcon.styles.jsx";



const CartIcon =()=>{
const isCartOpen = useSelector(selectIsCartOpen)
const itemsCount = useSelector(newCount) 
// const {isCartOpen,setIsCartOpen,itemsCount} = useContext(CartContext);

const dispatch = useDispatch() 
const toggleCartState = ()=> dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <IconContainer onClick={toggleCartState}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemsCount>{itemsCount}</ItemsCount>
        </IconContainer>
    )

}

export default CartIcon