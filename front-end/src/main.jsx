import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAut_I6Y2gJttKffnyZAAKDbfKPutV-McI",
  authDomain: "learn-games-9813e.firebaseapp.com",
  projectId: "learn-games-9813e",
  storageBucket: "learn-games-9813e.firebasestorage.app",
  messagingSenderId: "781883220653",
  appId: "1:781883220653:web:4bd60802937101c876dc24",
  measurementId: "G-32ZQGX54W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
