import "./button.scss";

const Button_taype_class = {
  google: " google-sign-in ",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_taype_class[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
