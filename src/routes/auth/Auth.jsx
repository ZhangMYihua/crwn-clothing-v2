import { SignUp } from "../../components/sign-up/SignUp";
import { SignIn } from "../../components/sign-in/SignIn";

import { AuthenticationContainer } from "./authentication.styles";

export const Auth = () => {
return (
    <AuthenticationContainer>
      <SignIn/>
      <SignUp />
    </AuthenticationContainer>
  )
}
