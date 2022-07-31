import "./RegisterForm.scss";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import { defaultRegisterFormFields, RegisterFormInputData } from "../../Database/RegisterFormInputData";
import Button from "../Button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(defaultRegisterFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const [error, setError] = useState('');
    const [regMsg, setRegMsg] = useState('');

    const logGooglePopupUser = async () => {
        await signInWithGooglePopup();
        setRegMsg("Successfully registered");
    };

    const resetFormFields = () => {
        setFormFields(defaultRegisterFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
            setRegMsg("Successfully created account");

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Email already in use')
            } else if (error.code === 'auth/weak-password') {
                setError('Password is too weak')
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
        <div className="register-form-container">
            <h2 className="register-title">
                Create your account
                <br />
                to get started
            </h2>

            <form onSubmit={handleSubmit}>
                {RegisterFormInputData.map((inputData) => (
                    <FormInput
                        label={inputData.label}
                        required={inputData.required}
                        type={inputData.type}
                        name={inputData.name}
                        value={formFields[inputData.name]}
                        onChange={handleChange}
                    />
                ))}

                <span className='msg-reg'>
                    {
                        regMsg ? (
                            <p>{regMsg}</p>
                        ) : (
                            <p></p>
                        )
                    }
                </span>

                <span className='error-reg'>
                    {
                        error ? (
                            <p>{error}</p>
                        ) : (
                            <p></p>
                        )
                    }
                </span>

                <Button
                    btnType="loginRegister"
                    type="submit"
                >
                    Register
                </Button>

                <Button
                    btnType="google"
                    type="button"
                    onClick={logGooglePopupUser}
                >
                    <img src={GoogleLogo} className='google-logo' />
                    Register with Google
                </Button>

                <div className="have-account">
                    Already have an account?
                    <Link to="/login">
                        <span className="login-link">Login</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
