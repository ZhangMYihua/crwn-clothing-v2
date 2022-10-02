import "./cartDropdown.styles.scss";
import CartItem from "../cart-item.component/CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component"

const CartDropdown = ()=>{
    
    const {cartItems} = useContext(CartContext);  
    console.log(cartItems)

    return(
        <div className = "cart-dopdown-container">
            <div className = "cart-items">
            {cartItems.map((item) => <CartItem key = {item.id} cartItem = {item}/>)}
            </div>
             
            <Button>Go to checkout</Button>
        </div>
        )
}

export default CartDropdown;