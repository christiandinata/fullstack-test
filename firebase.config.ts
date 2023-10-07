// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOgXlTOXOWhFwsVBqwpxbNZRcgDBvw8s",
  authDomain: "fullstack-test-9b35a.firebaseapp.com",
  projectId: "fullstack-test-9b35a",
  storageBucket: "fullstack-test-9b35a.appspot.com",
  messagingSenderId: "832611099151",
  appId: "1:832611099151:web:fb619be2ab3c37db71b97a",
  databaseURL: "https://fullstack-test-9b35a-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);