import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styled'

// JUST IMPORTED COMPONENTS, NEED TO EMBED IN CODE

export const CheckoutItem = ( {item} ) => {
  const {imageUrl, name, quantity, price} = item;
  const {addItemToCart, subtractItemFromCart, removeItemFromCart} = useContext(CartContext)

  const removeProductHandler = () => removeItemFromCart(item)
  const addItemHandler = () => addItemToCart(item)
  const subtractItemHandler = () => subtractItemFromCart(item)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}/>
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      
      <Quantity>
        <Arrow onClick={subtractItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={removeProductHandler} >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}