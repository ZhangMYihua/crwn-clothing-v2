import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [ isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then( res => res.json())
        const client_secret = response?.paymentIntent?.client_secret;
        if (!client_secret) {
            alert("An error occurred in get client secret key!")
            setIsProcessingPayment(false);
            return;
        }
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        });
        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment successful')
            }
        }
        setIsProcessingPayment(false);
    }
    
    return ( 
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment:</h2>
                <CardElement></CardElement>
                <PaymentButton isLoading={isProcessingPayment} buttonType={ BUTTON_TYPES_CLASSES.inverted}>Pay so fast</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
     );
}

export default PaymentForm;