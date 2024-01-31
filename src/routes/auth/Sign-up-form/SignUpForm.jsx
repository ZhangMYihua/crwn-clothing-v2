import React, { useState } from "react";
import "./signup-form.stylr.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firbase/firebaseutils";
import FormInput from "../../../components/form-input/FormInputComp";
import Button from "../../../components/button/Button";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setformFields] = useState(defaultFormField);
  const { displayName, confirmPassword, email, password } = formFields;

  const resetFormFields = () => {
    setformFields(defaultFormField);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
    console.log("name= ", name);
    console.log("value= ", value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //check if the password equal confirm password

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //createAuthUserWithEmailAndPassword
    try {
      const res = await createAuthUserWithEmailAndPassword(
        email,
        password,
        displayName
      );
      const { user } = res;
      //createUserDocumentFromAuth;

      const createdUser = await createUserDocumentFromAuth(user, {
        displayName,
      });
      // alert(
      //   `user ${createdUser.displayName} created succsefuly`,
      //   createdUser.displayName
      // );
      console.log("created document", createdUser);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user with email already in use ");
      }
      console.log("error throught user creation", error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        {/* <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        /> */}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        {/* <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        /> */}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {/* <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        /> */}
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        {/* <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        /> */}
        <Button
          type="submit"
          // buttonType="inverted"
        >
          Sign Up
        </Button>
        {/* <button type="submit">sign up with email and password </button> */}
      </form>
    </div>
  );
}

export default SignUpForm;
