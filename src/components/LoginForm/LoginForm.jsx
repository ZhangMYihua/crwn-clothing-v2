import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { defaultLoginFormFields, LoginFormInputData } from "./LoginFormInputData";
import { useState } from 'react';
import {
    signInWithGooglePopup,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultLoginFormFields);
    const { email, password } = formFields;

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultLoginFormFields);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="login-form-container">
            <h2 className="register-title">
                Login to your account
                <br />
                to buy awesome clothes
            </h2>
            <form onSubmit={() => { }}>
                {LoginFormInputData.map((inputData) => (
                    <FormInput
                        label={inputData.label}
                        required={inputData.required}
                        type={inputData.type}
                        name={inputData.name}
                        value={formFields[inputData.name]}
                    // onChange={handleChange}
                    />
                ))}

                <Button
                    btnType="loginRegister"
                    type="submit"
                >
                    Login
                </Button>

                <Button
                    btnType="google"
                    onClick={logGooglePopupUser}
                >
                    <img src={GoogleLogo} className='google-logo' />
                    Login with Google
                </Button>
                <div className="no-account">
                    Don't have an account?
                    <Link to="/register">
                        <span className="register-link">Register</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm