import { async } from "@firebase/util";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

    }
    
    return ( 
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit card payment:</h2>
                <CardElement></CardElement>
                <Button buttonType={ BUTTON_TYPES_CLASSES.inverted}>Pay so fast</Button>
            </FormContainer>
        </PaymentFormContainer>
     );
}

export default PaymentForm;