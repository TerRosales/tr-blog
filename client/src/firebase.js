// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tr-blog-11ae8.firebaseapp.com",
  projectId: "tr-blog-11ae8",
  storageBucket: "tr-blog-11ae8.appspot.com",
  messagingSenderId: "922922809121",
  appId: "1:922922809121:web:a8b7724bd30230b7567060",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
