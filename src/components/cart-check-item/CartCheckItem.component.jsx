import {CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton} from "./cartCheckItem.styles.jsx";
// import { useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import {decQuantity,addItemToCart,removeItemFromCheckout} from '../../store/cart/cart.action'
import { selectCartItems } from "../../store/cart/cart.selector.js";
// import { CartContext } from "../../contexts/cart.context";



const CartCheckItem = ({cartItem})=>{
    const dispatch= useDispatch();
    const cartItems = useSelector(selectCartItems)
    
    const {name,imageUrl,quantity,price} = cartItem;
    // const {decQuantity,addItemToCart,removeItemFromCheckout} = useContext (CartContext);
    const incHandler = ()=> dispatch(addItemToCart(cartItems, cartItem));
    const decHandler = ()=> dispatch(decQuantity(cartItems, cartItem));
    const delHandler = ()=> dispatch(removeItemFromCheckout(cartItems, cartItem));

return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        
        <BaseSpan>{name}</BaseSpan>
        
        <Quantity>
            <Arrow onClick={decHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={incHandler}>&#10095;</Arrow>
        </Quantity>
        
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick = {delHandler}>&#10005;</RemoveButton>   
      
    </CheckoutItemContainer>
)

}


export default CartCheckItem;