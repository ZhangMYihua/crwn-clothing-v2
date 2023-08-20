import './button.style.scss'

const BUTTON_TYPES_CLASES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPES_CLASES[buttonType]}`}
            {...otherProps}
            >
            {children}
        </button>
    );
}

export default Button;