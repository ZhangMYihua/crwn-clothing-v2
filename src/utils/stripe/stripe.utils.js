import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "pk_test_51LMmsuSGiuawmM80yMZ4EazYBmz5k9CWi6rXg6jQRCyFXSvsrVWLtvcrr8JhOUE2WpKziwu9qM1eYEqF2ahSlDD300bcgX0pdZ"
);
