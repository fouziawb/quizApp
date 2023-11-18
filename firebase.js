// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB58GLJxTU8ibUsVLsxptJ7FmISchlx910",
  authDomain: "myapp3-c3763.firebaseapp.com",
  databaseURL: "https://myapp3-c3763-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp3-c3763",
  storageBucket: "myapp3-c3763.appspot.com",
  messagingSenderId: "763334000977",
  appId: "1:763334000977:web:056194d2eea02c24e8d370"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db }