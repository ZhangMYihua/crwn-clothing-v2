import "./button.styles.scss";

const BUTTON_STYLE_CLASSES = {
    google : 'google-sign-in',
    inverted : "inverted",

}
const Button = ({children , buttontype, ...otherProps}) =>{
    return(
        <button className={`button-container ${BUTTON_STYLE_CLASSES[buttontype]}`}{...otherProps}>{children}</button>
    )
}
export default Button;