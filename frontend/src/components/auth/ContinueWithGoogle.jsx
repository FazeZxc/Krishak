import { auth } from "../../firebase";
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export function ContinueWithGoogle() {
    const provider = new GoogleAuthProvider

    function signin(e) {
        e.preventDefault()
        signInWithRedirect(auth ,provider)
        getRedirectResult(auth).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken

            const user = result.user
        }).catch((error) => {
            console.log(error);
        })

    }

    return <div>
        <button onClick={signin}>Continue with google</button>
    </div>
}