import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { ContinueWithGoogle } from "./ContinueWithGoogle"

export function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                console.log(useCredential)
                window.location.href="/dashboard"
            }).catch((error) => {
                console.log(error)
            })
    }

    return <div>
        <div className="sign-in-container flex flex-col justify-center items-center h-screen">
            <form onSubmit={signIn} className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-[50px] p-5 text-white font-bold font-MoiraiOne">Log in</h1>
                <input className="w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100  focus:shadow-outline-green  focus:shadow-lg border border-solid border-slate-300 hover:border-green-500  focus:border-green-500   bg-white text-slate-900  focus-visible:outline-0" type="email" placeholder="Enter your email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <input className="w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100  focus:shadow-outline-green  focus:shadow-lg border border-solid border-slate-300 hover:border-green-500  focus:border-green-500   bg-white text-slate-900  focus-visible:outline-0" type="password" placeholder="Enter your password" value={password} onChange={(e) =>
                    setPassword(e.target.value)
                }></input>
                <button style={{ "fontFamily" : "'IBM Plex Sans', sans-serif",
                "fontWeight": "600",
                "backgroundColor": "#22C55E",
                "fontSize": "0.875rem",
                "lineHeight": "1.5",
                "padding": "8px 16px",
                "borderRadius": "8px",
                "color": "white",
                "transition": "all 150ms ease",
                "cursor": "pointer",
                "border": "1px solid white"
                }}
                 type="submit">LOGIN</button>
        </form>
        <ContinueWithGoogle />
    </div>
    </div>
}


