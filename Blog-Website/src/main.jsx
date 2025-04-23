import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkLfjxFKbYuaxoBBs-HG1kjSvDegaXRY",
  authDomain: "my-blog-website-c19d7.firebaseapp.com",
  projectId: "my-blog-website-c19d7",
  storageBucket: "my-blog-website-c19d7.firebasestorage.app",
  messagingSenderId: "80145911553",
  appId: "1:80145911553:web:4ea5d664939cb535231500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
