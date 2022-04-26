import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { cart, setCart, cartAmount } = useContext(CartContext);

    const toggleCart = () => setCart(!cart);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartAmount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;