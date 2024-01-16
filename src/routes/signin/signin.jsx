 import  {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils"

 const Signin = () => {

  const logGoogUser = async() => {
    const {user} = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
    console.log(user)
  }

  return (<>

    <button onClick={logGoogUser} >SiginIn</button>
    </>
  )
}
export default Signin