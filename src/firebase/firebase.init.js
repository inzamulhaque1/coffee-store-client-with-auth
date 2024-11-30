

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBFyitFX61XKTnQIfMucxKhfdDP-DT9Rg",
  authDomain: "coffee-store-4c1de.firebaseapp.com",
  projectId: "coffee-store-4c1de",
  storageBucket: "coffee-store-4c1de.firebasestorage.app",
  messagingSenderId: "807317683367",
  appId: "1:807317683367:web:a7600b3a7717175194af82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);