import './button.scss'

const BtnTypeClasses = {
    primaryBtn: "btn-primary",
    google: "btn-google",
    addToCart: "btn-add-to-cart",
};
const Button = ({ children, btnType, ...otherProps }) => {
    return (
        <button
            className={`btn-container ${BtnTypeClasses[btnType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
