import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCurrentUser } from '../../store/user/user.selector';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles.jsx';

const PaymentForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
        
    const paymentHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        if(!currentUser) {
            dispatch(setIsCartOpen(false));
            navigate('/sign-in');
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;
        
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser.displayName
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            console.log(paymentResult.error);
            return;
        }

        if (paymentResult.paymentIntent.status === 'succeeded') {
            console.log("Payment has gone through!");
            return;
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Information</h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;