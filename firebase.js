// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPYvZrdI9KrJDrfwJztcAo08ZTZ2bHgSg",
    authDomain: "bmicalculator-e38a1.firebaseapp.com",
    databaseURL: "https://bmicalculator-e38a1.firebaseio.com",
    projectId: "bmicalculator-e38a1",
    storageBucket: "bmicalculator-e38a1.appspot.com",
    messagingSenderId: "678391464814",
    appId: "1:678391464814:web:67c09bad4f7dbf00c7377f"  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);

