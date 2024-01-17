import { auth } from "../../firebase";
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export function ContinueWithGoogle() {
    const provider = new GoogleAuthProvider

    function signin(e) {
        e.preventDefault()
        signInWithRedirect(auth, provider)
        getRedirectResult(auth).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken

            const user = result.user
        }).catch((error) => {
            console.log(error);
        })

    }

    return <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold">Or</h1>
        <button style={{
            "fontFamily": "'IBM Plex Sans', sans-serif",
            "fontWeight": "600",
            "backgroundColor": "#1877F2",
            "fontSize": "0.875rem",
            "lineHeight": "1.5",
            "padding": "8px 16px",
            "borderRadius": "8px",
            "color": "white",
            "transition": "all 150ms ease",
            "cursor": "pointer",
            "border": "1px solid white"
        }}
            onClick={signin}>CONTINUE WITH GOOGLE</button>
    </div>
}