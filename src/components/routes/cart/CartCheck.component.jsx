import {CheckhoutContainer,Total} from "./cartCheck.styles.jsx";
// import { useContext } from "react";
// import { CartContext } from "../../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems,newTotal } from "../../../store/cart/cart.selector.js";
import CartCheckItem from "../../cart-check-item/CartCheckItem.component";
import PaymentForm from "../../payment-form/payment-form.component.jsx";

const CartCheck = ()=>{

    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(newTotal);
    // const {cartItems,totalPrice} = useContext(CartContext);
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

            <PaymentForm/>
        </CheckhoutContainer>
    )
}

export default CartCheck;