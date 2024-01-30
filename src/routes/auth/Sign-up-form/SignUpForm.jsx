import React, { useState } from "react";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setformFields] = useState(defaultFormField);
  const { displayName, confirmPassword, email, password } = formFields;

    console.log("formField", formFields);
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
    console.log("name= ", name);
    console.log("value= ", value);
  };
  return (
    <div>
      <h1>signup form with email and password</h1>
      <form onSubmit={() => {}}>
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
