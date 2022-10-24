import { useState } from "react";
import { createAuthUserWithEmailAndPassword, userDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password does not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await userDocFromAuth(user, {displayName}).then(resetFormFields);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return ( 
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display name:" type="text" required name="displayName" onChange={handleChange} value={displayName} />
                <FormInput label="Email:" type="email" required name="email" onChange={handleChange} value={email} />
                <FormInput label="Password:" type="password" required name="password" onChange={handleChange} value={password} />
                <FormInput label="Confirm password:" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
     );
}

export default SignUpForm;