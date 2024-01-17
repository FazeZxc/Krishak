import { useState } from 'react'
import './App.css'
import { Signin } from './components/auth/Signin'
import { SignUp } from './components/auth/SignUp'
import { AuthDetails } from './components/auth/AuthDetails'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from './components/auth/authstate'
import { Admin } from './components/admin/Admin'
import { Tab, TabPanel, TabsList, Tabs } from '@mui/base';

function App() {
    const { authUser, authentication, userSignOut } = useAuthState()

    if (authentication.initialized) {
        return <>Loading</>
    }

    return (

        <main>

            <Tabs defaultValue={1}>
                <TabsList className='mb-4 rounded-xl bg-green-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg'>
                    <Tab slotProps={{
                        root: ({ selected, disabled }) => ({
                            className: `font-sans ${selected
                                ? 'text-green-500 bg-white'
                                : 'text-white bg-transparent focus:text-white hover:bg-green-400'
                                } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-green-light`,
                        }),
                    }} value={1}>Log in</Tab>
                    <Tab slotProps={{
                        root: ({ selected, disabled }) => ({
                            className: `font-sans ${selected
                                ? 'text-green-500 bg-white'
                                : 'text-white bg-transparent focus:text-white hover:bg-green-400'
                                } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-green-light`,
                        }),
                    }} value={2}>Sign Up</Tab>
                </TabsList>

                <Router>
                    <PublicRoute path={"/"} element={(<div></div>)} />
                    <TabPanel className="w-full font-sans text-sm" value={1}><PublicRoute path={"/login"} element={(<Signin></Signin>)} authenticated={authentication.authenticated} /></TabPanel>
                    <TabPanel className="w-full font-sans text-sm" value={2}><PublicRoute path={"/register"} element={(<SignUp></SignUp>)} authenticated={authentication.authenticated} /></TabPanel>
                    <PrivateRoute path={"/dashboard"} element={(<Admin></Admin>)} authenticated={authentication.authenticated} />
                    {/* <Route element={Error} /> //this component is shown whenever a bad url is entered */}
                </Router>
            </Tabs>
            <AuthDetails></AuthDetails>


        </main>
    );
}

function PublicRoute({ element, authenticated }) {
    console.log('PublicRoute:', authenticated);
    return authenticated ? <Navigate to="/" /> : element;
}

function PrivateRoute({ element, authenticated }) {
    console.log('PrivateRoute:', authenticated);
    return authenticated ? element : <Navigate to="/dashboard" />;
}


export default App
