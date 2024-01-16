import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

export function Signin(){
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth , email , password)
        .then((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log in</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>
                    setPassword(e.target.value)
                }></input>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
}