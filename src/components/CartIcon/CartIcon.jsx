import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './CartIcon.scss';
export const CartIcon = (props) => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const cartOpenHandler = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className='cart-icon-container' onClick={cartOpenHandler}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
