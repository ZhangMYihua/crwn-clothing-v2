import React from "react";
import { useState } from "react";

import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/formInput.component";
import "./sign-in-form.styles.scss";

import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    console.log("inside google");
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid Email");
          break;
        case "auth/wrong-password":
          alert("Invalid Password");
          break;
        case "auth/user-not-found":
          alert("no user is associated");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In with your account</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="text" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign-in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
