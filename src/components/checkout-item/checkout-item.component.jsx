import { useDispatch, useSelector } from "react-redux";
import {
  removeItemsToCart,
  clearItemFromCart,
  addItemsToCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemsToCartHandler = () =>
    dispatch(addItemsToCart(cartItems, CartItem));
  const reduceItemsToCartHandler = () =>
    dispatch(removeItemsToCart(cartItems, CartItem));
  const deleteProductHandler = () =>
    dispatch(clearItemFromCart(cartItems, CartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
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
  );
};

export default CheckoutItem;
