import SignUpInput from "./sign-up-input.component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.name;
    createAuthUserWithEmailAndPassword(email, password);
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with an email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <SignUpInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          onChange={handleChange}
        />
        <SignUpInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <SignUpInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <SignUpInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
