import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './cart-icon.scss';

const CartIcon = () => {
	const { cartIsOpen, setCartIsOpen } = useContext(CartContext);

	const handleCartClick = () => {
		setCartIsOpen(!cartIsOpen);
	};

	return (
		<div className="cart-icon-container" onClick={handleCartClick}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">10</span>
		</div>
	);
};

export default CartIcon;
