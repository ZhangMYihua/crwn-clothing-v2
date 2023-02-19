import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utility/firebase/FirebaseComponent'

import SignUpFormComponent from '../../Components/SignUpForm/SignUpFormComponent'

const SignInComponent = () => {

  const otvet = async () => {
    const user = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(`eto iz signin ${userDocRef}`)

  }
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={otvet}>Google popup</button>
      <SignUpFormComponent />
    </div>
  )
}
export default SignInComponent
