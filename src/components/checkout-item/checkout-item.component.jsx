
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton} from "./checkout-item.styles.jsx";


const CheckoutItem = ({CartItem}) => {
    const {name,quantity,imageUrl,price} = CartItem;
    const {deleteProduct,addItemsToCart,reduceItemsToCart} = useContext(CartContext);

    const addItemsToCartHandler = ()=> addItemsToCart(CartItem);
    const reduceItemsToCartHandler = ()=> reduceItemsToCart(CartItem);
    const deleteProductHandler = ()=> deleteProduct(CartItem);

    return (
        <CheckoutItemContainer>
        <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
        <Arrow onClick={reduceItemsToCartHandler}>&#10094;</Arrow>
        
        <Value>{quantity}</Value>
       
        <Arrow onClick={addItemsToCartHandler}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={deleteProductHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>



    )


}

export default CheckoutItem;