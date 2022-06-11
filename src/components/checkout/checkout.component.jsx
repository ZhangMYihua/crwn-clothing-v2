import CheckoutHeader from "../checkout-header/header-block.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  sampleProduct = {
    imgUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    name: "Brown Cowboy",
    price: 35,
  };

  return (
    <>
      <div className="checkout-header-container">
        <CheckoutHeader header="Product" />
        <CheckoutHeader header="Description" />
        <CheckoutHeader header="Quantity" />
        <CheckoutHeader header="Price" />
        <CheckoutHeader header="Remove" />
      </div>
      <CheckOut cartItem={sampleProduct} />
    </>
  );
};

export default CheckOut;
