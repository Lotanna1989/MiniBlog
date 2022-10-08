import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth" ;





    // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU34ELY5sAcrAgd9tfdWznWXLBlvhoUNk",
  authDomain: "lotus-blogposts.firebaseapp.com",
  projectId: "lotus-blogposts",
  storageBucket: "lotus-blogposts.appspot.com",
  messagingSenderId: "1025266746332",
  appId: "1:1025266746332:web:3165e847997572498b4519",
  measurementId: "G-NZ42Y1MQHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();