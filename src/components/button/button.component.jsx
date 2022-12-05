import './button.styles.scss'
/*
default 

inverted

google sign in

*/

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

//Button component  
//through the value buttonType we are getting as a prop, we can control how we want to render the buttons on our app
const Button = ({ children , buttonType, ...otherProps}) => {
  return (
    <button
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
    >
      {children}
    </button>
  )
}
export default Button