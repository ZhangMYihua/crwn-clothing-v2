 import  {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils"

 const Signin = () => {

  const logGoogUser = async() => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }

  return (<>

    <button onClick={logGoogUser} >SiginIn</button>
    </>
  )
}
export default Signin