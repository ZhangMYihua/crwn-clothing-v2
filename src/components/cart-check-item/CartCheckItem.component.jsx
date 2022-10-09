import {CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton} from "./cartCheckItem.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";



const CartCheckItem = ({cartItem})=>{

    const {name,imageUrl,quantity,price} = cartItem;
    const {decQuantity,addItemToCart,removeItemFromCheckout} = useContext (CartContext);
    const incHandler = ()=> addItemToCart(cartItem);
    const decHandler = ()=> decQuantity(cartItem);
    const delHandler = ()=> removeItemFromCheckout(cartItem);

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