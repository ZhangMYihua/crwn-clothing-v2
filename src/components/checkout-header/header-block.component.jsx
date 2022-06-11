import "./header-block.styles.scss";

const CheckoutHeader = ({ header }) => {
  return (
    <div className="header-block">
      <span>{header}</span>
    </div>
  );
};

export default CheckoutHeader;
