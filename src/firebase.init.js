import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhBoaLuMi8d2ZAYZo8HQkDykZmz0ISwN0",
    authDomain: "photographer-portfolio-8cbb0.firebaseapp.com",
    projectId: "photographer-portfolio-8cbb0",
    storageBucket: "photographer-portfolio-8cbb0.appspot.com",
    messagingSenderId: "953606623723",
    appId: "1:953606623723:web:9ff9c451c7686d1ce649ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;