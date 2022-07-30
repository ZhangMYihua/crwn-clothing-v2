import './Button.scss'

const BUTTON_TYPE_CLASSES = {
    google: "btn-google",
    loginRegister: "btn-login-register",
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
