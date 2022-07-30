import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { defaultLoginFormFields, LoginFormInputData } from "./LoginFormInputData";
import { useState } from 'react';
import { logGooglePopupUser } from "../../auth/googleAuth";
import { loginAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultLoginFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultLoginFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            alert("Successfully logged in");
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('User not found');
            } else if (error.code === 'auth/wrong-password') {
                alert('Wrong password');
            }
        }
    };

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
            <form onSubmit={handleSubmit}>
                {LoginFormInputData.map((inputData) => (
                    <FormInput
                        label={inputData.label}
                        required={inputData.required}
                        type={inputData.type}
                        name={inputData.name}
                        value={formFields[inputData.name]}
                        onChange={handleChange}
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
                    type="button"
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