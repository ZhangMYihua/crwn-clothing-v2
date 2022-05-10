import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import './product-card.scss';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const handleAddToCart = () => addItemToCart(product);

	const { name, price, imageUrl } = product;
	const formattedPrice = `$${price}.00`;

	return (
		<div className="product-card-container">
			<div className="image-wrapper">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<div className="footer">
				<div className="name-stock">
					<p className="name">{name}</p>
					<p className="stock">In stock</p>
				</div>
				<p className="price">{formattedPrice}</p>
				<div className="buttons">
					<Button onClick={handleAddToCart}>Add to cart</Button>
					<Button buttonType="outline">Buy now</Button>
				</div>
				<p className="shipping">Free shipping on all orders.</p>
			</div>
		</div>
	);
};

export default ProductCard;
