 import  {signInWithGooglePopup} from "../../utils/firebase/firebase.utils"

 const Signin = () => {

  const logGoogUser = async() => {
    const reseponse = await signInWithGooglePopup()
    console.log(reseponse)
  }

  return (<>

    <button onClick={logGoogUser} >SiginIn</button>
    </>
  )
}
export default Signin