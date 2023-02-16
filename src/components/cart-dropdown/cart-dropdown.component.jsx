import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem  key ={cartItems.id} cartItem={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropDown;