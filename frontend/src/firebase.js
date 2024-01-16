import { initializeApp } from 'firebase/app';
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDb5HnwWhfSiqPpNcwz78OdJdM_YYBFgaM",
    authDomain: "crop-planner-d9076.firebaseapp.com",
    projectId: "crop-planner-d9076",
    storageBucket: "crop-planner-d9076.appspot.com",
    messagingSenderId: "99061913991",
    appId: "1:99061913991:web:ff1c0da6212a5c4f695b22",
    measurementId: "G-7KLTQF8FL2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



  