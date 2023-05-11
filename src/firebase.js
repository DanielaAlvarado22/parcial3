// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwr5AQjvtnd0jFt8wNq8aKCDGrchcSCo",
  authDomain: "crud-ec7ac.firebaseapp.com",
  projectId: "crud-ec7ac",
  storageBucket: "crud-ec7ac.appspot.com",
  messagingSenderId: "36405934791",
  appId: "1:36405934791:web:48433ef5412a0dd7be1ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}