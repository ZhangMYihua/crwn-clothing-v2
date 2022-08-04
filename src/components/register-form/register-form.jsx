import "./register-form.scss";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import {
    defaultRegisterFormFields,
    RegisterFormInputData,
} from "../../database/register-form-input-data";
import Button from "../button/button";
import GoogleLogo from "../../assets/google-logo.png";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(defaultRegisterFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const [error, setError] = useState("");
    const [regMsg, setRegMsg] = useState("");
    const navigate = useNavigate();

    const logGooglePopupUser = async () => {
        await signInWithGooglePopup();
        setRegMsg("Successfully registered");
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    const resetFormFields = () => {
        setFormFields(defaultRegisterFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
            setRegMsg("Successfully created account");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email already in use");
            } else if (error.code === "auth/weak-password") {
                setError("Password is too weak");
            } else {
                setError(error.message);
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
                {RegisterFormInputData.map((inputData) => {
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
                    );
                })}

                <span className="msg-reg">{regMsg ? <p>{regMsg}</p> : <p></p>}</span>

                <span className="error-reg">{error ? <p>{error}</p> : <p></p>}</span>

                <Button btnType="primaryBtn" type="submit">
                    Register
                </Button>

                <Button btnType="google" type="button" onClick={logGooglePopupUser}>
                    <img src={GoogleLogo} alt="GOogle Logo" className="google-logo" />
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
