import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDt5vNFOxulBdPtd9ma1z2a4cLMwsnHCvw",
    authDomain: "crown-clothing-f9d06.firebaseapp.com",
    projectId: "crown-clothing-f9d06",
    storageBucket: "crown-clothing-f9d06.appspot.com",
    messagingSenderId: "526573944941",
    appId: "1:526573944941:web:a6177f88a86c2ba42abf64",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
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

export const loginAuthUserWithEmailAndPassword = async (email, password) => {
    // if (!email || !password) { return }
    if (!email || !password) {
        throw new Error("Please provide an email and password");
    }
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
    return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    })

    await batch.commit();
}

export const getCategoriesAndDocs = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce(
        (acc, docSnapshot) => {
            const { title, items } = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        }, {}
    );

    return categoryMap;
}