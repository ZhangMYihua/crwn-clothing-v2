import {CartDropdownContainer,CartItems,EmptyMessage} from "./cartDropdown.styles.jsx";
import CartItem from "../cart-item/CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component"
import {useNavigate} from "react-router-dom";
const CartDropdown = ()=>{
    
    const {cartItems} = useContext(CartContext);  
    const navigate = useNavigate();

    const navigateHandler = ()=>{
        navigate('/cart')
    }

    return(
        <CartDropdownContainer>
            <CartItems>
            {
            cartItems.length ? cartItems.map((item) => <CartItem key = {item.id} cartItem = {item}/>)
            : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
             
            <Button onClick={navigateHandler}>Go to checkout</Button>
            {/* <Link  to='/cart'> <Button>Go to checkout</Button> </Link> */}
        </CartDropdownContainer>
        )
}

export default CartDropdown;