import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDt5vNFOxulBdPtd9ma1z2a4cLMwsnHCvw",
    authDomain: "crown-clothing-f9d06.firebaseapp.com",
    projectId: "crown-clothing-f9d06",
    storageBucket: "crown-clothing-f9d06.appspot.com",
    messagingSenderId: "526573944941",
    appId: "1:526573944941:web:a6177f88a86c2ba42abf64",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { name, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                name,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if (!email || !password) { return }
    if (!email || !password) {
        throw new Error("Please provide an email and password");
    }
    return await createUserWithEmailAndPassword(auth, email, password);
};
