import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getStorage} from 'firebase/storage'; //first


const firebaseConfig = {
  apiKey: "AIzaSyANREB4W9u1dhnoeoLWo4QqPvLLcZa2KpE",
  authDomain: "image-fire-base.firebaseapp.com",
  projectId: "image-fire-base",
  storageBucket: "image-fire-base.appspot.com",
  messagingSenderId: "598993789141",
  appId: "1:598993789141:web:a94ce967bb1ce2ef47025c",
  measurementId: "G-18MWT6LHQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);//second