import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { 
    CheckoutContainer, 
    CheckoutHeader, 
    HeaderBlock,
    Total,
    Empty 
} from './checkout.styles.jsx';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
                    (
                        <Fragment>
                            <Total>TOTAL: ${cartTotal}</Total>
                            <PaymentForm />
                        </Fragment>
                    )
            }
        </CheckoutContainer>
    );
}

export default Checkout;