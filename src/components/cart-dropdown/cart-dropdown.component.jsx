import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return ( 
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ?
                (cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item}/> 
                })) :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
     );
}

export default CartDropdown;