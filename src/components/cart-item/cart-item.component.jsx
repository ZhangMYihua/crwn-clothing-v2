import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CartItemContainer, ItemDetails} from './cart-item.styles.jsx';

const CartItem = ({ item }) => {

    return (
        <CartItemContainer>
            <img src={item.imageUrl} alt={`${item.name}`} />
            <ItemDetails>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.quantity} x ${item.price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;