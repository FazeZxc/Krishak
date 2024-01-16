import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

export function SignUp(){
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signUp(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth , email , password)
        .then((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create an account</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>
                    setPassword(e.target.value)
                }></input>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
}