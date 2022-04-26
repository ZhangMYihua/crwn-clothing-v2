import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { 
    CheckoutContainer, 
    CheckoutHeader, 
    HeaderBlock,
    Total,
    Empty 
} from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    const CheckoutHeaderList = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                {
                    CheckoutHeaderList.map(header => (
                        <HeaderBlock key={header}>
                            <span>{header}</span>
                        </HeaderBlock>
                    ))
                }
            </CheckoutHeader>
            {
                cartItems.map(item => {
                    return (
                        <CheckoutItem key={item.id} cartItem={item} />
                    );
                })
            }
            {
                cartItems.length === 0 ?
                    <Empty>Your cart is empty</Empty> :
                    <Total>TOTAL: ${cartTotal}</Total>
            }
        </CheckoutContainer>
    );
}

export default Checkout;