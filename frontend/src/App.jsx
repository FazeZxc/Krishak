import './App.css'
import { AuthDetails } from './components/auth/AuthDetails'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from './components/auth/authstate'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { AllRoutes } from './routing/Routes'

function App() {




    return (


        <main>
            <div className='absolute right-[100px]'>

                <AuthDetails></AuthDetails>
            </div>
            <AllRoutes></AllRoutes>



        </main>
    );
}


export default App
