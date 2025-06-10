import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8dc-4vWaBwgXYd_4SrwJ2Ua62TuNgfiw",
  authDomain: "manish-portfolio-c96c1.firebaseapp.com",
  projectId: "manish-portfolio-c96c1",
  storageBucket: "manish-portfolio-c96c1.firebasestorage.app",
  messagingSenderId: "130442227989",
  appId: "1:130442227989:web:6c300e635a1d159271f91c",
  measurementId: "G-5ZNXWY06HD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);