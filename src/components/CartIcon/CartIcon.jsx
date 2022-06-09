import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIconStyle';
export const CartIcon = (props) => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const cartOpenHandler = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<CartIconContainer onClick={cartOpenHandler}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
