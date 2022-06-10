import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { setIsCartOpen, addItemToCart } = useContext(CartContext);

  const addProductToCart = (product) => {
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addProductToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
