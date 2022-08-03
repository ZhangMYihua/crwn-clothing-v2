import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { defaultLoginFormFields, LoginFormInputData } from "../../database/LoginFormInputData";
import { useState } from 'react';
import { loginAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import {
    signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultLoginFormFields);
    const { email, password } = formFields;
    const [error, setError] = useState('');
    const [loggedInMsg, setLoggedInMsg] = useState('');

    const logGooglePopupUser = async () => {
        await signInWithGooglePopup();
        setLoggedInMsg("Successfully logged in");
    };

    const resetFormFields = () => {
        setFormFields(defaultLoginFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await loginAuthUserWithEmailAndPassword(email, password);
            setLoggedInMsg("Successfully logged in");
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('User not found')
            } else if (error.code === 'auth/wrong-password') {
                setError('Wrong password')
            } else {
                setError(error.message)
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
                {LoginFormInputData.map((inputData) => {
                    const { label, required, type, name, value } = inputData;

                    return (
                        <FormInput
                            label={label}
                            required={required}
                            type={type}
                            name={name}
                            value={formFields[name]}
                            onChange={handleChange}
                        />
                    )
                })}

                <span className='msg-logged-in'>
                    {
                        loggedInMsg ? (
                            <p>{loggedInMsg}</p>
                        ) : (
                            <p></p>
                        )
                    }
                </span>

                <span className='error-login'>
                    {
                        error ? (
                            <p>{error}</p>
                        ) : (
                            <p></p>
                        )
                    }
                </span>

                <Button
                    btnType="primaryBtn"
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