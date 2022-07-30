import "./SignUpForm.scss";
import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;

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
            await createUserDocFromAuth(user, { name });
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
        <div className="sign-up-form-container">
            <h2 className="sign-up-title">
                Create your account
                <br />
                to buy awesome clothes
            </h2>
            <form onSubmit={handleSubmit}>
                <label className="labels name-label">Name:</label>
                <input
                    required
                    type="text"
                    className="inputs name-input"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <br />

                <label className="labels email-label">Email:</label>
                <input
                    required
                    type="email"
                    className="inputs email-input"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <br />

                <label className="labels password-label">Password:</label>
                <input
                    required
                    type="password"
                    className="inputs password-input"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <br />

                <label className="labels password-label">Confirm Password:</label>
                <input
                    required
                    type="password"
                    className="inputs password-input"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <br />

                <button type="submit" className="submit-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
