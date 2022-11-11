import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);



// export const stripePromise = loadStripe("pk_test_51LwQcvKumHsOsYKHkA5HyLrAcv7AXTTU8dRKFHaxYAEpdqxOFiMaKM0yJFJpJdmIlTAGMoFrIxZzHY05tH1tBspv00v3wJ0AiY");