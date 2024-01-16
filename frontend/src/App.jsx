import { useState } from 'react'
import './App.css'
import { Signin } from './components/auth/Signin'
import { SignUp } from './components/auth/SignUp'
import { AuthDetails } from './components/auth/AuthDetails'

function App() {

    return (
        <>
            <Signin></Signin>
            <SignUp></SignUp>
            <AuthDetails></AuthDetails>
        </>
    )
}

export default App
