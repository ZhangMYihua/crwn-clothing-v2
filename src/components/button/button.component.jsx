
import './button.styles.scss';


const BUTTON_TYPES_CLASSES = {
  google : 'google-sign-in',
  inverted : 'inverted',
  default : 'default',
}

const Button = ({ children, buttonType, ...props}) => {

  return (
    <button {...props} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>{children}</button>
    )
};

export default Button;
