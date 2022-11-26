import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import './authentication.styles.scss';

import { 
   auth,
   signInWithGooglePopup, 
   signInWithGoogleRedirect,   
   createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

   //run this when the app runs for the first time (hence the second param is an empty array)
   //auth is some of kind of authentication memory bank tracking all of our authentication states
   //for our website and for our Firebase instance regardles of where the website is going
   useEffect(async () => {
      const response = await getRedirectResult(auth);
      // console.log(response);

      if(response) {
         const userDocRef = await createUserDocumentFromAuth(response.user);
      }

   }, []);

   const logGoogleRedirectUser = async () => {
      // const response = await signInWithGooglePopup();
      // createUserDocumentFromAuth(response.user);
      // console.log(response);

      const {user} = await signInWithGoogleRedirect();
      console.log(user);
   };

   return (
      <div className='authentication-container'>
         <SignInForm />
         <SignUpForm />
      </div>
   );
};

export default Authentication;