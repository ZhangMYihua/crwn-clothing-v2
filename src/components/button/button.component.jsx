import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sing-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType='', ...otherProps }) => {
    return (
        <div>
            <button 
                className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}` }
                { ...otherProps } 
            >
                {children}
            </button>
        </div>
    );
}

export default Button;