import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton } from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
const CheckoutItem = ({cartItem}) =>{

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
    const {name, quantity, imageUrl, price} = cartItem

    const clearItemHandler = ()=>{
        clearItemFromCart(cartItem)
    }
    const removeItemHandler = ()=>{
        removeItemFromCart(cartItem)
    }
    const addItemHandler = ()=>{
        addItemToCart(cartItem)
    }
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
                    <Name>{name}</Name>
                    <Quantity>
                        <Arrow onClick={removeItemHandler}>
                            &#10094;
                        </Arrow>
                        <Value>{quantity}</Value>
                        <Arrow onClick={addItemHandler}>
                            &#10095;
                        </Arrow>  
                    </Quantity>
                    <Price>{price}</Price>
                    <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;