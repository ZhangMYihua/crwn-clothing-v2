import {CheckhoutContainer,Total} from "./cartCheck.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import CartCheckItem from "../../cart-check-item/CartCheckItem.component";

const CartCheck = ()=>{
    const {cartItems,totalPrice} = useContext(CartContext);
    return(
        <CheckhoutContainer>
            
            <ul>
                <li>Product</li>
                <li>Description</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Remove</li>
            </ul>
            
                
                {cartItems.map( item => <CartCheckItem key= {item.id} cartItem = {item} />)}
                
            
            <Total>TOTAL: {totalPrice}</Total>
        </CheckhoutContainer>
    )
}

export default CartCheck;