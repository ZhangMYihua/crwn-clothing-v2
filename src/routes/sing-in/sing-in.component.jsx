
import {singnWhitGoooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js';


const SingIn = ()=>{

    const logGoogleUser = async () => {
       const {user} = await singnWhitGoooglePopup();
        
       const userDocRef =  await createUserDocumentFromAuth(user);
    }

 return(
    <div>
      <h1>Sing In</h1>.
      <button onClick={logGoogleUser}>Sing In Whit Google</button>

    </div>
   
 )

}


export default SingIn