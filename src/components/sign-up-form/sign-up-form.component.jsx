import React from "react";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/formInput.component";
import "./sign-up-form.styles.scss";

import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      createUserDocumentFromAuth(user, { displayName });

      //======================================================
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already present");
      } else {
        console.log("User creation through email and password encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have an account</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label="Email" required type="text" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
        <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <Button type="submit" buttonType="inverted">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
