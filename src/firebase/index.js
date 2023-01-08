// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2OD7f32hGUnbizkaCQdXUXkCol-Ycl30",
  authDomain: "app-odonto-a4ac4.firebaseapp.com",
  projectId: "app-odonto-a4ac4",
  storageBucket: "app-odonto-a4ac4.appspot.com",
  messagingSenderId: "922824486299",
  appId: "1:922824486299:web:f195882ea173f7787c453e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  storage
}