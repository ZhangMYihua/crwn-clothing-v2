// import {useEffect} from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in/sign-in-form.component.jsx';

//import Button from '../../components/button/button.component.jsx';
// import {
//   //auth,
//   signInWithGooglePopup,
//   //signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils.js';

import "./authentication.styles.scss";
import Button from '../../components/button/button.component.jsx';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js';

const Authentication = () => {


  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithGoogleRedirect();
  //   console.log(user)

  // };

  // useEffect(async ()=>{
  //   const response = getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // },[]);


  return ( 
    <div className='authentication-container'>
    {/* <h1 className = 'sign-in' > Sign In Page </h1>  */}
    {/* <button type = "button" className = "btn btn-primary" onClick = {logGoogleUser} 
    >Sign in with Google Popup </button>  */}

  {/* <Button buttontype = "google" onClick = {signInWithGooglePopup}>Google</Button>     */}
    
    {
      /* <button type = "button" className = "btn btn-danger"  
              onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */
    }

    <SignInForm />
    <SignUpForm /> 
    
    
    </div>

  );
};


export default Authentication;