import './LoginForm.scss'
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { defaultLoginFormFields, LoginFormInputData } from "../../database/login-form-input-data";
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
    const navigate = useNavigate();

    const logGooglePopupUser = async () => {
        await signInWithGooglePopup();
        setLoggedInMsg("Successfully logged in");
        setTimeout(() => { navigate('/') }, 2000);
    };

    const resetFormFields = () => {
        setFormFields(defaultLoginFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginAuthUserWithEmailAndPassword(email, password);
            setLoggedInMsg("Successfully logged in");
            resetFormFields();
            setTimeout(() => { navigate('/') }, 2000);
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
                    const { label, required, type, name } = inputData;

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
                    <img src={GoogleLogo} alt='Google Logo' className='google-logo' />
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