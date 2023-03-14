
import {auth,singnWhitGoooglePopup,signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js';
import SingUpForm from '../../components/sing-up-form/sing-up-form.component.jsx';

const SingIn = ()=>{



    const logGoogleUser = async () => {
       const {user} = await singnWhitGoooglePopup();
        
       const userDocRef =  await createUserDocumentFromAuth(user);
    }


 return(
    <div>
      <h1>Sing In</h1>.
      <button onClick={logGoogleUser}>Sing In Whit Google</button>
     <SingUpForm/>

    </div>
   
 )

}


export default SingIn