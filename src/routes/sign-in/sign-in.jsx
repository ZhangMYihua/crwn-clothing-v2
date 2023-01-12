
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase";


const SigIn =()=>{
    const loGoogleUser =async()=>{
        const {user}=await signInWithGooglePopup()
        const userDocref=await  createUserDocumentFromAuth(user)
      
    }
    return (
        <div>
            <h1>sig in</h1>
            <button onClick={loGoogleUser}>
                sign in with google
            </button>
        </div>
    )
}
export default SigIn;