import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX48PS_68f3-GGizcC4wyoruzYogmT-sE",
  authDomain: "dfwpga-78d95.firebaseapp.com",
  projectId: "dfwpga-78d95",
  storageBucket: "dfwpga-78d95.firebasestorage.app",
  messagingSenderId: "499327963903",
  appId: "1:499327963903:web:6093bbba4af24f97d9b2ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
