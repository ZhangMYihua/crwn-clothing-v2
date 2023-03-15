import "./button.styles.scss";
// default buttons

// inverted buttons

// Google.sing.in buttons

    const BUTTON_TYPE_CLASSE = {
        google: 'google-sign-in',
        inverted: 'inverted',
    }




const Button = ({children, buttonType,...otherProps})=>{

 return(
    <button className={`button-container ${BUTTON_TYPE_CLASSE[buttonType]}`} {...otherProps}>{children}</button>
 )



}

export default Button