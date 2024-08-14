// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-6ff00.firebaseapp.com",
  projectId: "mern-estate-6ff00",
  storageBucket: "mern-estate-6ff00.appspot.com",
  messagingSenderId: "1092923621647",
  appId: "1:1092923621647:web:798d5531484cb504793e7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);