import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyAMWvp9KMWEW7cvMyRgUZR6-lytQlAW1m0",
  authDomain: "movie-app-f53aa.firebaseapp.com",
  projectId: "movie-app-f53aa",
  storageBucket: "movie-app-f53aa.appspot.com",
  messagingSenderId: "214991034950",
  appId: "1:214991034950:web:c0f160ab84327e84b80847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
