// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfO9mG8rlT97j3d0KYkk_GbpPzt1Lrl9s",
  authDomain: "elobrador-8833d.firebaseapp.com",
  projectId: "elobrador-8833d",
  storageBucket: "elobrador-8833d.firebasestorage.app",
  messagingSenderId: "597552224621",
  appId: "1:597552224621:web:132177cf37a5d7469fe264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);