import "./button.styles.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...ohterAttributes }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...ohterAttributes}
    >
      {children}
    </button>
  );
};

export default Button;

/*
default
inverted
google sign in
*/
