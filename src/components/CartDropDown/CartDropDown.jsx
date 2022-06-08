import React from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';
export const CartDropDown = (props) => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>Go to checkout</Button>
		</div>
	);
};

export default CartDropDown;
