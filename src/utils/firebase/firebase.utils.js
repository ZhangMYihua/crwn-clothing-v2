import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

//* Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyVTa9lEzwra2N0L9AU7pQGnWmJhHdJSA",
    authDomain: "crown-clothing24.firebaseapp.com",
    projectId: "crown-clothing24",
    storageBucket: "crown-clothing24.appspot.com",
    messagingSenderId: "390758939901",
    appId: "1:390758939901:web:c60858262ea70991a2d294"
};

//* Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    //? If users does not exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating the user', error);
        }
    }

    //? is users exist
    return userDocRef;
}