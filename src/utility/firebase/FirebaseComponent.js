import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAXuqaQqQPvmj3GXiy5Vbdtuyji6_y-RvU',
  authDomain: 'shop-clothes-f8eed.firebaseapp.com',
  projectId: 'shop-clothes-f8eed',
  storageBucket: 'shop-clothes-f8eed.appspot.com',
  messagingSenderId: '429043819073',
  appId: '1:429043819073:web:24f5b06b936ca208765cc0',
  measurementId: 'G-TRNJHNE8B4',
}

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const db = getFirestore(firebaseApp)
export const auth = getAuth()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionInformation={},
) => {
  const userDocRef = doc(db, 'users', userAuth.user.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { user } = userAuth
    const { displayName, email } = user
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const signAuthInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
