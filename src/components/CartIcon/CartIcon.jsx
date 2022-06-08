import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
export const CartIcon = (props) => {
	return (
		<div className='cart-icon-container'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
