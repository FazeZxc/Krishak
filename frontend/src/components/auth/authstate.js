// authState.js
import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export function useAuthState() {
  const [authUser, setAuthUser] = useState(null);
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initialized: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setAuthState({
          authenticated: true,
          initialized: false,
        });
      } else {
        setAuthUser(null);
        setAuthState({
          authenticated: false,
          initialized: false,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
      })
      .catch((error) => console.log(error));
  }

  return { authUser, authentication, userSignOut };
}