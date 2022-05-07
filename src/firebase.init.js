import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyA1O7QDauWvcC5dtkBcJau2zEWz7cubtFg",
  // authDomain: "sound-hub-80d5a.firebaseapp.com",
  // projectId: "sound-hub-80d5a",
  // storageBucket: "sound-hub-80d5a.appspot.com",
  // messagingSenderId: "930319725024",
  // appId: "1:930319725024:web:7832ea19be15b2ba987b85",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
