import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utility/firebase/FirebaseComponent"

const SignInComponent = () => {
  const otvet = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={otvet}>knopka dlja consolja loga</button>
    </div>
  )
}

export default SignInComponent
