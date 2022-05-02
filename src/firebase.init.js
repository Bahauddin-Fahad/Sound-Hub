// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1O7QDauWvcC5dtkBcJau2zEWz7cubtFg",
  authDomain: "sound-hub-80d5a.firebaseapp.com",
  projectId: "sound-hub-80d5a",
  storageBucket: "sound-hub-80d5a.appspot.com",
  messagingSenderId: "930319725024",
  appId: "1:930319725024:web:7832ea19be15b2ba987b85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
