import { useState } from "react";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { PaymentButton } from "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/Button.component";
import { PaymentFormContainer,FormContainer } from "./payment-form.styles";
import { newTotal } from "../../store/cart/cart.selector";
import { sellectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";


const PaymentForm =() => {
    const stripe = useStripe();
    const elements = useElements();
    const total = useSelector(newTotal);
    const userName = useSelector(sellectCurrentUser);
    const [processingPayment, setProcessingPayment] = useState(false);
    

    const paymentHandler = async(e)=>{
        e.preventDefault();
        if (!stripe | !elements){
            return;
            
        }
        setProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent',{
            method:'post',
            headers:{
                'Content-Type':'application/json',

            },
            body: JSON.stringify({amount : total*100})
        }).then(res=>res.json());

        const {paymentIntent:{client_secret}} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: userName ? userName.displayName : 'guest',
                }
            }
        });
        setProcessingPayment(false);
        if (paymentResult.error){
            alert(paymentResult.error);
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment successful');
            }
        }

    }

    return (
        
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement/>
                <PaymentButton isLoading={processingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )

}

export default PaymentForm;
