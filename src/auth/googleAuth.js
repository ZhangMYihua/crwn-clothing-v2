import {
    signInWithGooglePopup,
    createUserDocFromAuth,
} from "../utils/firebase/firebase";

export const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
};