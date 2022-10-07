import { useContext } from 'react';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, imageUrl, price } = product;
  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddItemToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
