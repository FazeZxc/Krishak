
import React from 'react';
import { useAuthState } from './authstate.js';
import { ContinueWithGoogle } from './ContinueWithGoogle';
import MediaCard from '../MediaCard.jsx';

export function AuthDetails() {
  const { authUser, authentication, userSignOut } = useAuthState();

  return (
    <div>
      {authUser ? (
        <>
          {/* <p>{`Signed In as ${authUser.email}`}</p> */}
          {/* <button onClick={userSignOut}>Sign Out</button> */}
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
        onClick={userSignOut}>LOG OUT</button>
        <MediaCard></MediaCard>
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
