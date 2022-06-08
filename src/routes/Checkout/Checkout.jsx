import { useContext } from 'react';
import './Checkout.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
const Checkout = () => {
	const { cartItems, total } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>remove</div>
			</div>

			{cartItems.map((item) => {
				return <CheckOutItem key={item.name} cartItem={item} />;
			})}
			<span className='total'>Total: {total}</span>
		</div>
	);
};

export default Checkout;
