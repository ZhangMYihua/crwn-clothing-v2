import { signInWithGooglePopup } from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <div>Sign-in</div>
      <button onClick={logGoogleUser}>Click Me!</button>
    </div>
  );
};

export default SignIn;
