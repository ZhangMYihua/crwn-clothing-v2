import "./authenticatio.style.scss";
import SignInForm from "../Sign-in-form/SignInForm";
import SignUpForm from "../Sign-up-form/SignUpForm";
function Authentication() {
  return (
    <>
      {/* <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>sign in with google pop up </button> */}
      {/* <button onClick={signInwithGoogleRedirect}>
        sign in with google redirect
      </button> */}
      <div className="authenticationarea">
        <SignInForm />

        <SignUpForm />
      </div>
    </>
  );
}

export default Authentication;
