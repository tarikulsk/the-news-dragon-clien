// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfyJheUU9NQmpCm0OFZqdfLTniaSPNr_s",
    authDomain: "the-news-dragon-ac0a4.firebaseapp.com",
    projectId: "the-news-dragon-ac0a4",
    storageBucket: "the-news-dragon-ac0a4.appspot.com",
    messagingSenderId: "1091218131134",
    appId: "1:1091218131134:web:4eeb709b7a9239f7eff6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;