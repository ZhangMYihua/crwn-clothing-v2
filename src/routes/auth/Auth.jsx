import { SignUp } from "../../components/sign-up/SignUp";
import { SignIn } from "../../components/sign-in/SignIn";

import './authentication.scss'

export const Auth = () => {
return (
    <div className="authentication-container" >
      <SignIn/>
      <SignUp />
    </div>
  )
}
