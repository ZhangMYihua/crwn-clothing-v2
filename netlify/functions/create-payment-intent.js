require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) || "sk_test_51LMmsuSGiuawmM80BrwGIK1y8mprquhpa6njquW8EwrrCTa0ZTDCtDA5FuvRsjVYruNbjFXqqkDrR1o76lg7isGn00kgkssAgP";

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
