import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./styles.scss";
import Button from "../button";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
