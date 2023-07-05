import  {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';

import "./productCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick = {addProductToCart}> Add to Card</Button>
    </div>
  );
};

export default ProductCard;
