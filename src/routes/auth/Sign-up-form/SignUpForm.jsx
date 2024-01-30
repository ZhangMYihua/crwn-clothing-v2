import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firbase/firebaseutils";

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

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user with email already in use ");
      }
      console.log("error throught user creation", error);
    }
  };
  return (
    <div>
      <h1>signup form with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">sign up with email and password </button>
      </form>
    </div>
  );
}

export default SignUpForm;
