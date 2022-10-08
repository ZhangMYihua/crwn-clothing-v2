import "./cartDropdown.styles.scss";
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
        <div className = "cart-dopdown-container">
            <div className = "cart-items">
            {cartItems.map((item) => <CartItem key = {item.id} cartItem = {item}/>)}
            </div>
             
            <Button onClick={navigateHandler}>Go to checkout</Button>
            {/* <Link  to='/cart'> <Button>Go to checkout</Button> </Link> */}
        </div>
        )
}

export default CartDropdown;