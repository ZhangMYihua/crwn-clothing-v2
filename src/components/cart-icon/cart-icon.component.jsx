import { useDispatch, useSelector } from "react-redux";
import { selectCarCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCarCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));
    return ( 
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
     );
}

export default CartIcon;