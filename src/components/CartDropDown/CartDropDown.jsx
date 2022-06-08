import React, { useContext } from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../contexts/cart.context';

export const CartDropDown = (props) => {
	const { cartItems, setCartItems } = useContext(CartContext);
	console.log({ cartItems });
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>Go to checkout</Button>
		</div>
	);
};

export default CartDropDown;
