import React, { useState } from "react";
import "./signupform.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import FormInput from "./FormInput";
import Button from "./Button";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFormFields();
    if (!email || !password || !displayName || !confirmPassword) return;
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName, email });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot Create User Email is already in use");
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Display Name"
          required
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          required
          name="confirmPassword"
          type="text"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button  type="submit">
          SignUp
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
