import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';
const CheckoutItem = ({ item }) => {
    const { removeItemFromCart, clearItemFromCart, addItemToCart } = useContext(CartContext);

    const clearItem = () => clearItemFromCart(item);

    const subOneItem = () => removeItemFromCart(item)
    const addOneItem = () => addItemToCart(item)
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={item.imageUrl} alt="" />
            </ImageContainer>
            <BaseSpan>{item.name}</BaseSpan>
            <Quantity>
                <Arrow onClick={subOneItem}>
                    &#10094;
                </Arrow>
                <Value>{item.quantity}</Value>
                <Arrow onClick={addOneItem}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{item.price}</BaseSpan>
            <RemoveButton onClick={clearItem}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;