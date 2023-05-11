
import {BaseButton} from "./button.styles"

// I comment the instructor way of doing this to have more practice in JS but it's the wrong way of doing cause Docs have change.

// export  const BUTTON_TYPE_CLASSES = {
//         base: 'base',
//         google: 'google-sign-in',
//         inverted: 'inverted',
//     }
    

// const getButton = ( buttonType = BUTTON_TYPE_CLASSES.base) => 
// ({
//  [BUTTON_TYPE_CLASSES.base]: BaseButton,
//  [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
//  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType])




const Button = ({children, buttonType,...otherProps})=>{

    //  const CustomsButton = () => getButton(buttonType);

 return(
    <BaseButton {...otherProps}>{children}</BaseButton>
 )



}

export default Button