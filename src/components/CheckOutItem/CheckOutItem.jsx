import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './CheckOutItem.scss';

export const CheckOutItem = ({ cartItem }) => {
	const { addItemToCart, removeItemToCart, clearItemsFromCart } = useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;
	const removeItemToCartHandler = () => removeItemToCart(cartItem);
	const addItemToCartHandler = () => addItemToCart(cartItem);
	const clearItemHandler = () => clearItemsFromCart(cartItem);
	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span onClick={removeItemToCartHandler} className='arrow'>
					&#10094;
				</span>
				<div className='value'>{quantity}</div>
				<span onClick={addItemToCartHandler} className='arrow'>
					&#10095;
				</span>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckOutItem;
