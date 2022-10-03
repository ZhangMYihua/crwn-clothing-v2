import "./cartCheck.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import CartCheckItem from "../../cart-check-item/CartCheckItem.component";

const CartCheck = ()=>{
    const {cartItems,totalPrice} = useContext(CartContext);
    return(
        <div className="checkout-container">
            
            <ul className="checkout-header">
                <li className="header-block">Product</li>
                <li className="header-block">Description</li>
                <li className="header-block">Quantity</li>
                <li className="header-block">Price</li>
                <li className="header-block">Remove</li>
            </ul>
            
                
                {cartItems.map( item => <CartCheckItem key= {item.id} cartItem = {item} />)}
                
            
            <span className="total">TOTAL: {totalPrice}</span>
        </div>
    )
}

export default CartCheck;