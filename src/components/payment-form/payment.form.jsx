import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart-selector';
import { selectCurrentUser } from '../../store/user/user-selector';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentFormContainer, FormContainer } from './payment-styles'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment , setIsProcessingPayment] = useState(false);



  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
        return;
    }

    setIsProcessingPayment(true);

    const response = await fetch  ('/.netlify/functions/create-payment-intent', {
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json());

    const { paymentIntent: { client_secret } } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: currentUser ? currentUser.displayName : 'Guest',
            }
        }
    });

    setIsProcessingPayment(false);

    if(paymentResult.error) {
        alert(paymentResult.error);
    } else {
        if(paymentResult.paymentIntent.status === 'succeeded') {
            alert('payment succesfull')
        }
    }
  }

    return ( 
        <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
         <h2>Creadit Card Payment:</h2>
         <CardElement />
         <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now</Button>
        </FormContainer>
        </PaymentFormContainer>
     );
}
 
export default PaymentForm;