import './button.styles.scss'

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({children, buttonType, onClick}) =>{

    return(
        <button onClick={onClick} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>
            {children}
        </button>
    )
}

export default Button;