import './button.styles.scss';

/*
   3 types of buttons for this application
      1. default
      2. inverted
      3. Goggle sign-in

   We can control the different styling for these buttons via CSS classes
*/

const BUTTON_TYPE_CLASSES = {
   google: 'google-sign-in',
   inverted: 'inverted'

};

const Button = ({children, buttonType, ...otherProps}) => {

   return (
      <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
         {...otherProps}
      >
         {children}
      </button>

   )
};

export default Button;