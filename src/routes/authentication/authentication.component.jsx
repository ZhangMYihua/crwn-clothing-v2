import React from "react";
import "./authentication.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
