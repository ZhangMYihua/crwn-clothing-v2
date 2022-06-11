import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">❮</div>
        <span className="value">{quantity}</span>
        <div className="arrow">❯</div>
      </span>
      <span>{price}</span>
      <div className="remove-button">✕</div>
    </div>
  );
};

export default CheckoutItem;
