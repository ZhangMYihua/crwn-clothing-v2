import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return ( 
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
     );
}

export default CartIcon;