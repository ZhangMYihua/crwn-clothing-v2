import { useContext, useState, useEffect } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer,ItemCount } from './cart-icon.styles.jsx';
const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartItemCount } = useContext(CartContext);

    const toggleIsCartOpen  = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen }>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon