// import React , { useEffect, useState } from "react";
// import { auth } from "../../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { ContinueWithGoogle } from "./ContinueWithGoogle";

// export function AuthDetails(){
//     const [authUser , setAuthUser] = useState(null)
//     const [authentication, setAuthState] = useState({
//         authenticated: false, 
//         initialized: true 
//       });

//     useEffect(()=>{
//         const listen = onAuthStateChanged(auth , (user)=>{
//             if(user){
//                 setAuthUser(user)
//                 setAuthState({
//                     authenticated: true ,
//                     initialized: false
//                 })
//             } else{
//                 setAuthUser(null)
//                 setAuthState({
//                     authenticated: false ,
//                     initialized: false
//                 })
//             }
//         })

//         return ()=>{
//             listen();
//         }

//     }, [])

//     function userSignOut(){
//         signOut(auth).then(()=>{
//             console.log('Sign out succesful')
//         }).catch(error => console.log(error))
//     }


//     return <div>
//         {authUser ? <> <p>{`Signed In as ${authUser.email}`} </p> <button onClick={userSignOut}>Sign Out</button> </>: <><p>Signed Out</p> 
//         <ContinueWithGoogle></ContinueWithGoogle></>}
//     </div>
// }

// module.exports = {}




// AuthDetails.js
import React from 'react';
import { useAuthState } from './authstate.js';
import { ContinueWithGoogle } from './ContinueWithGoogle';

export function AuthDetails() {
  const { authUser, authentication, userSignOut } = useAuthState();

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          {/* <p>Signed Out</p> */}
          <ContinueWithGoogle />
        </>
      )}
    </div>
  );
}
