 import { useEffect } from "react"
import  {auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleWithRedirect} from "../../utils/firebase/firebase.utils"
import { getRedirectResult } from "firebase/auth"

 const Signin = () => {

  // useEffect(async () => {

  //   const res = await getRedirectResult(auth)
  //  if(res){
  //   const userDocRef = await createUserDocumentFromAuth(res.user)
  //  }
  // },[])

  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }


  
  return (<>

    <button onClick={logGoogleUser} >SiginIn</button>
    <button onClick={async () => await signInWithGoogleWithRedirect()} >SiginInERdirect</button>
    </>
  )
}
export default Signin