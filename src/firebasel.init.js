// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFs2WLAPW7SoRnCVCvORW1Qy0QzaojikQ",
  authDomain: "ema-john-ecommerce-proje-e80be.firebaseapp.com",
  projectId: "ema-john-ecommerce-proje-e80be",
  storageBucket: "ema-john-ecommerce-proje-e80be.appspot.com",
  messagingSenderId: "947992454009",
  appId: "1:947992454009:web:dbfa85aefb51e4b05b45a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export default auth ;