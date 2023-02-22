
import './button.styles.scss';


const BUTTON_TYPES_CLASSES = {
  google : 'google-sing-in',
  inverted : 'inverted',
  default : 'default',
}

const Button = ({ children, buttonType, ...props}) => {

  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>{children}</button>
    )
};

export default Button;
