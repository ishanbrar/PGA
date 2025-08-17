import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX48PS_68f3-GGizcC4wyoruzYogmT-sE",
  authDomain: "dfwpga-78d95.firebaseapp.com",
  projectId: "dfwpga-78d95",
  storageBucket: "dfwpga-78d95.firebasestorage.app",
  messagingSenderId: "499327963903",
  appId: "1:499327963903:web:6093bbba4af24f97d9b2ca",
  databaseURL: "https://dfwpga-78d95-default-rtdb.firebaseio.com"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase services
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default firebase;
