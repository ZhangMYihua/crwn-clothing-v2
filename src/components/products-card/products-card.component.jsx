import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./products-card.style.jsx";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCard = () => dispatch(addItemsToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <Name>{name}</Name>

        <Price>{price}</Price>
      </Footer>
      <Button $inverted onClick={addProductToCard}>
        {" "}
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
