import { StyledButton } from "./button.styles";
const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({children, buttonType, onClick}) =>{

    return(
        <StyledButton onClick={onClick} className={`${BUTTON_TYPES_CLASSES[buttonType]}`}>
            {children}
        </StyledButton>
    )
}

export default Button;