import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return ( 
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
     );
}

export default CartIcon;