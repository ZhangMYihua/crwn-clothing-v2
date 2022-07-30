import "./RegisterForm.scss";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import { defaultRegisterFormFields, RegisterFormInputData } from "./RegisterFormInputData";
import Button from "../Button/Button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(defaultRegisterFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultRegisterFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocFromAuth(user, { displayName });
            resetFormFields();

            alert("Successfully created account");

        } catch (error) {
            alert(error.message);
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

                <Button
                    btnType="loginRegister"
                    type="submit"
                >
                    Register
                </Button>

                <Button
                    btnType="google"
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
