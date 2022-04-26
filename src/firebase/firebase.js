// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm4UTQv5J2vjGfko68Oa1JT8Mnxoxm6DA",
  authDomain: "esenciatiendaonline-1.firebaseapp.com",
  projectId: "esenciatiendaonline-1",
  storageBucket: "esenciatiendaonline-1.appspot.com",
  messagingSenderId: "609498696308",
  appId: "1:609498696308:web:3d18799aa046fa81621f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);