
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCW2GVCbOdLcjNLlSHVkQ8halrTQg1VLCk",
  authDomain: "house-marketplace-app-ac221.firebaseapp.com",
  projectId: "house-marketplace-app-ac221",
  storageBucket: "house-marketplace-app-ac221.appspot.com",
  messagingSenderId: "964647755395",
  appId: "1:964647755395:web:ba0d9d171e0a82474385b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()