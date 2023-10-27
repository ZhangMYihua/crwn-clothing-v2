

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth} 
    from '../../utils/firebase/firebase.utils'

import SingUpForm from '../../components/sign-up-form/sign-up-from.component';    


  


const SingIN = () =>{

 


    const logGooglePopUpUser = async()=>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
       } 
 

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGooglePopUpUser}>Sign in with google Popup</button>
           <SingUpForm />
        </div>
    )
}

export default SingIN 