import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <>
            <div className="">
                <h1>sign in page</h1>
            </div>
            <button onClick={logGoogleUser}>sign in</button>
        </>
    )
}


export default SignIn;