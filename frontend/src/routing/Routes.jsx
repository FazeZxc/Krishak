import React, { useState } from 'react';
import { useEffect } from 'react';
import { SignUp } from '../components/auth/SignUp';
import { Signin } from '../components/auth/Signin';
import { useAuthState } from '../components/auth/authstate';
import { Tabs, Tab, TabPanel, TabsList } from '@mui/base';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import { Routes, Router, redirect, BrowserRouter, Route, Navigate } from 'react-router-dom';
import BasicCard from '../components/nav/Cardbar';
import ChatCard from '../components/nav/ChatCard';
import { ChatRoom } from '../chat/Chatroom';
import { Calendar } from '../components/calendar';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import CalendarPage from '../components/CalendarPage';
import CropList from '../content/CropList';
import HelpCard from '../components/nav/HelpCard';

function Layout() {
    return <div>
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
                }} value={1}>LOGIN</Tab>
                <Tab slotProps={{
                    root: ({ selected, disabled }) => ({
                        className: `font-sans ${selected
                            ? 'text-green-500 bg-white'
                            : 'text-white bg-transparent focus:text-white hover:bg-green-400'
                            } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                            } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-green-light`,
                    }),
                }} value={2}>SIGN UP</Tab>
            </TabsList>
            <TabPanel className="w-full font-sans text-sm" value={1}><Signin></Signin></TabPanel>
            <TabPanel className="w-full font-sans text-sm" value={2}><SignUp></SignUp></TabPanel>
        </Tabs>
    </div>
}



export function AllRoutes() {
    const { authUser, authentication } = useAuthState()
    if (authentication.initialized) {
        return <Box className='w-screen h-screen flex flex-row items-center justify-center'>
            <CircularProgress />
        </Box>
    }
    function PublicPage() {
        return <div>
            <Layout></Layout>
        </div>
    }

    function ProtectedPage() {
        return <div className='flex flex-row justify-center items-center h-screen'>
            <BasicCard></BasicCard>
            <ChatCard></ChatCard>
            <HelpCard></HelpCard>
        </div>;
    }

    // useEffect(() => {
    //     loggedIn();
    // }, [authentication.authenticated]);

    return <div>
        <BrowserRouter>
            {/* <AuthStatus authUser={authUser}></AuthStatus> */}
            <Routes>
                <Route path={'/register'} element={(<PublicPage></PublicPage>)}></Route> :
                <Route path={'/dashboard'} element={<ProtectedPage></ProtectedPage>}></Route>
                <Route path={'/chat'} element={<ChatRoom></ChatRoom>}></Route>
                <Route path={'/calendar'} element={<CalendarPage></CalendarPage>}></Route>
                <Route path={'/help'} element={<CropList></CropList>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
}


