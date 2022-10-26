import {BaseButton,InvertedButton,GoogleSignInButton,ButtonSpinner} from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted'
}

const getButton = (buttonType=  BUTTON_TYPE_CLASSES.base) =>

    (
        {
            [BUTTON_TYPE_CLASSES.base] : BaseButton,
            [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
            [BUTTON_TYPE_CLASSES.inverted]: InvertedButton

        }[buttonType]

    );



const Button =({children, buttonType,isLoading, ...otherProps})=>{
const CustomButton = getButton(buttonType);

    
    return <CustomButton disabled={isLoading} {...otherProps}>{isLoading? <ButtonSpinner/> : children}</CustomButton>
    
}

export default Button;