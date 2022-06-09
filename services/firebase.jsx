// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeKF4nl8DfipRH5yBhR8BDuUDOvGQgshQ",
    authDomain: "crud-simples-41166.firebaseapp.com",
    projectId: "crud-simples-41166",
    storageBucket: "crud-simples-41166.appspot.com",
    messagingSenderId: "222679693460",
    appId: "1:222679693460:web:481813c66486ca3d129c81",
    measurementId: "G-ZSWCJFVMK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)