import './button.styles.scss';

const Button = ({ children, buttonType='', ...otherProps }) => {
    return (
        <button
            className={`button-container ${buttonType}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;