// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpmZ4KuJLyfA8shvIigRhNgjp28BlK6sY",
  authDomain: "proyecto-react-js-d394a.firebaseapp.com",
  projectId: "proyecto-react-js-d394a",
  storageBucket: "proyecto-react-js-d394a.appspot.com",
  messagingSenderId: "610951342980",
  appId: "1:610951342980:web:5d8f149fabaa87dffb8bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);