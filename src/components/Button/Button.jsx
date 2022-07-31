import './Button.scss'

const BUTTON_TYPE_CLASSES = {
    primaryBtn: "btn-login-register",
    google: "btn-google",
    addToCart: "btn-add-to-cart",
};
const Button = ({ children, btnType, ...otherProps }) => {
    return (
        <button
            className={`btn-container ${BUTTON_TYPE_CLASSES[btnType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
